import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { PropsWithChildren } from 'hono/jsx';
import { jsxRenderer } from 'hono/jsx-renderer';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';
import { About } from './views/About';
import { Home } from './views/Home';

type Bindings = Record<string, never>;

const app = new Hono<{ Bindings: Bindings }>();

// Middleware
app.use('*', logger());
app.use('*', secureHeaders());
app.use(
  '/api/*',
  cors({
    origin: ['https://fulbo.amarrete.com'],
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    maxAge: 86400,
  }),
);

// JSX renderer
app.use(
  '*',
  jsxRenderer(({ children }: PropsWithChildren) => {
    return <html lang="es">{children}</html>;
  }),
);

// Views
app.get('/', (c) => c.render(<Home />));
app.get('/about', (c) => c.render(<About />));

// API Routes
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler
app.onError((err, c) => {
  console.error(err);
  return c.json(
    {
      error: 'Internal Server Error',
      path: c.req.path,
      method: c.req.method,
      timestamp: new Date().toISOString(),
    },
    500,
  );
});

// Not found handler
app.notFound((c) => {
  return c.json(
    {
      error: 'Not Found',
      path: c.req.path,
      method: c.req.method,
      timestamp: new Date().toISOString(),
    },
    404,
  );
});

export default app;
