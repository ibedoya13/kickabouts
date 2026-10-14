import { Layout } from '../components/Layout';

export function Home() {
  return (
    <Layout>
      <div class="card">
        <h2>Bienvenido</h2>
        <p>
          Esta es una vista renderizada con JSX en el servidor usando Hono y
          Cloudflare Workers. Puedes crear componentes reutilizables y
          renderizarlos directamente en el Worker.
        </p>
      </div>
      <div class="card">
        <h2>Recursos</h2>
        <p>
          Explora las diferentes rutas y vistas disponibles. El proyecto está
          configurado con TypeScript, Biome y Vitest para un desarrollo moderno
          y seguro.
        </p>
      </div>
    </Layout>
  );
}
