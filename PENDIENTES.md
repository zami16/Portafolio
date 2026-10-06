# Datos pendientes

Todo se completa en **`src/content/profile.ts`** (y `src/content/crm.ts` para HEBRIX). Los campos
en `null` o vacíos no se muestran en la página.

## Perfil y contacto

- [ ] Hoja de vida en PDF, cuando exista: copiar a `public/` y poner la ruta en `contact.cv`.
- [ ] Año de grado en la USCO (`profile.graduationYear`).
- [ ] Dominio final del portafolio (para `canonical`, `og:url` y sitemap).

## Capturas reales (`image` de cada proyecto)

El entorno de trabajo bloquea sggroupmd.com, connectart.online y nodo404.vercel.app, así que
no pude sacarlas. Guarda cada captura en `public/` y llena `image` con `src` y `alt`.

- [ ] Nodo Store
- [ ] Sitio de S&G Group
- [ ] ConnectArt (versión nueva, cuando esté publicada)

## ConnectArt

- [ ] Cuando publiques la versión nueva: cambiar `status`, el texto del botón y medir con
      Lighthouse para agregar el puntaje a `results`.

## HEBRIX (entrega el 21 de noviembre de 2026)

- [ ] Actualizar cifras al entregar: semanas, campos, workflows publicados (hoy el sistema
      muestra 8 publicados), integraciones que pasen de "en curso" a funcionando.
- [ ] Stripe, cuando esté integrado: agregarlo a `stack`.
- [ ] Captura de la pantalla de inicio de sesión de app.hebrix.io (sin datos de clientes).

## Otros proyectos (sin incluir todavía)

- [ ] ¿Incluir `zami16/NODO` o `JAMLizca/Hestia`?
