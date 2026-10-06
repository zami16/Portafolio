# Portafolio de Zahira Neira

Tecnóloga en Desarrollo de Software (Universidad Surcolombiana). Sitios web, productos
digitales y CRM con automatización.

La página está diseñada como un mapa de transporte: cada disciplina es una línea y cada
proyecto una estación. El sistema visual está documentado en [`DESIGN.md`](DESIGN.md).

## Stack

- React 19 + TypeScript, Vite.
- CSS propio con variables (sin framework de estilos ni librería de animación).
- Prerender del HTML en el build, para SEO y para que el contenido llegue sin JavaScript.
- Fuentes autoalojadas: Archivo Variable y JetBrains Mono Variable.

## Cómo verlo

> **No abras `index.html` con doble clic ni con "Go Live" sobre el código fuente:** el sitio
> está en React + TypeScript y necesita Vite. Así se ve en blanco.

```bash
npm install        # solo la primera vez
npm run dev        # abre http://localhost:5173
```

- **En tu celular:** con `npm run dev` corriendo, la terminal muestra una dirección "Network"
  (por ejemplo `http://192.168.1.5:5173`). Ábrela en el celular conectado al mismo WiFi.
- **Con "Go Live":** primero `npm run build`. El proyecto ya está configurado para que Live
  Server muestre la carpeta `dist/`, que es el sitio terminado.

Otros comandos:

```bash
npm run build      # typecheck + build + prerender en dist/
npm run preview    # sirve dist/ en http://localhost:4173
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
