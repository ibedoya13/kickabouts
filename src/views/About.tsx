import { Layout } from '../components/Layout';

export function About() {
  return (
    <Layout>
      <div class="card">
        <h2>Acerca de Kickabouts</h2>
        <p>
          Kickabouts es un proyecto de ejemplo que muestra cómo construir una
          aplicación web con Hono y Cloudflare Workers, utilizando JSX para
          renderizar vistas en el servidor.
        </p>
      </div>
      <div class="card">
        <h2>Tecnologías</h2>
        <p>
          Hono es un framework web ligero y rápido que funciona en múltiples
          runtimes, incluyendo Cloudflare Workers. JSX nos permite escribir
          vistas de forma declarativa y reutilizable.
        </p>
      </div>
    </Layout>
  );
}
