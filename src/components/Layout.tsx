import type { PropsWithChildren } from 'hono/jsx';

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kickabouts</title>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: system-ui, -apple-system, sans-serif; background: #1a1b26; color: #c0caf5; min-height: 100vh; }
          .container { max-width: 800px; margin: 0 auto; padding: 2rem; }
          .header { text-align: center; margin-bottom: 2rem; }
          .header h1 { color: #7aa2f7; font-size: 2.5rem; margin-bottom: 0.5rem; }
          .header p { color: #565f89; }
          .card { background: #24283b; border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem; border: 1px solid #3b4261; }
          .card h2 { color: #bb9af7; margin-bottom: 0.5rem; }
          .card p { color: #a9b1d6; line-height: 1.6; }
          .footer { text-align: center; margin-top: 2rem; color: #565f89; font-size: 0.875rem; }
          a { color: #7aa2f7; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .nav { display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem; }
          .nav a { padding: 0.5rem 1rem; background: #24283b; border-radius: 4px; border: 1px solid #3b4261; }
          .nav a:hover { background: #3b4261; text-decoration: none; }
        `}</style>
      </head>
      <body>
        <div class="container">
          <header class="header">
            <h1>Kickabouts</h1>
            <p>API + vistas JSX con Hono y Cloudflare Workers</p>
          </header>
          <nav class="nav">
            <a href="/">Inicio</a>
            <a href="/about">Acerca de</a>
            <a href="/api/health">Health</a>
          </nav>
          {children}
          <footer class="footer">
            <p>Hecho con Hono + Cloudflare Workers</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
