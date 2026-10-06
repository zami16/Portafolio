# Portafolio de Zahira Neira Murillo

Tecnóloga en Desarrollo de Software (Universidad Surcolombiana). Sitios web, productos
digitales y CRM con automatización.

La página está diseñada como un mapa de transporte: cada disciplina es una línea y cada
proyecto una estación. El sistema visual está documentado en [`DESIGN.md`](DESIGN.md).

## Stack

- React 19 + TypeScript, Vite.
- CSS propio con variables (sin framework de estilos ni librería de animación).
- Prerender del HTML en el build, para SEO y para que el contenido llegue sin JavaScript.
- Fuentes autoalojadas: Archivo Variable y JetBrains Mono Variable.

## Comandos

```bash
npm install
npm run dev        # desarrollo en http://localhost:5173
npm run build      # typecheck + build + prerender en dist/
npm run preview    # sirve dist/
```

## Editar el contenido

Todo el contenido vive en dos archivos:

- `src/content/profile.ts`: perfil, contacto, proyectos, trayectoria y herramientas.
- `src/content/crm.ts`: estructura del CRM de S&G (pipeline, workflows, formularios, campos).

Lo que falta por completar está en [`PENDIENTES.md`](PENDIENTES.md). Un campo en `null`
simplemente no se muestra.

## Despliegue

`dist/` es un sitio estático: funciona en Vercel, Netlify, Cloudflare Pages o GitHub Pages
sin configuración adicional.
