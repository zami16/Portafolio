# Datos pendientes

Todo se completa en **`src/content/profile.ts`**. Los campos en `null` no se muestran en la
página, así que puedes llenarlos uno a uno sin romper nada.

## Perfil y contacto

- [ ] Hoja de vida en PDF, cuando exista: copiar a `public/` y poner la ruta en `contact.cv`.
- [ ] Año de grado en la USCO (`profile.graduationYear`).
- [ ] Dominio final del sitio (para `canonical`, `og:url` y sitemap).

## Nodo Store, bootcamp SIMPS (`id: 'simps'`)

Confirmado: Universidad EAFIT con Electronic Arts, noviembre 2025 a junio 2026, equipo Nodo 404,
app en nodo404.vercel.app. Tu parte se tomó de tus commits en los dos repositorios.

- [ ] Captura de la app (`image`). El entorno de trabajo no puede abrir nodo404.vercel.app.

## Sitio web de S&G Immigration (`id: 'sg-web'`)

Confirmado: sggroupmd.com y autorización de S&G.

- [ ] Captura real del sitio (`image`): el entorno bloquea sggroupmd.com, así que hay que
      subirla a mano a `public/` o permitir el dominio en la red del entorno.
- [ ] Tecnologías, rol (¿lo hiciste sola?) y funcionalidades. Esta información está en tus
      conversaciones de claude.ai, que esta sesión no puede leer: hay que pegarla aquí.

## ConnectArt (`id: 'connectart'`)

Confirmado: connectart.online.

- [ ] Captura real (`image`), mismo bloqueo de red que S&G.
- [ ] Qué es exactamente, para quién, tecnologías, hosting y funcionalidades (misma nota).

## CRM de S&G (`id: 'crm'`, más `src/content/crm.ts`)

Confirmado: lo construiste completo, S&G autoriza mostrarlo, y WhatsApp, Twilio y los roles de
usuario funcionan. Si cambia la estructura del CRM, actualizar `src/content/crm.ts`.

## Otros proyectos (sin incluir todavía)

- [ ] ¿Incluir `zami16/NODO` o `JAMLizca/Hestia`? (El reto de nodo404 ya está incluido como Nodo Store.)
