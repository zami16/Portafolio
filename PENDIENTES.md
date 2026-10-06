# Datos pendientes

Todo se completa en **`src/content/profile.ts`**. Los campos en `null` no se muestran en la
página, así que puedes llenarlos uno a uno sin romper nada.

## Perfil y contacto

- [ ] Confirmar que `zaminemu0816@gmail.com` es el correo que quieres publicar (`contact.email`).
- [ ] URL de LinkedIn (`contact.linkedin`).
- [ ] Hoja de vida en PDF: copiar a `public/` y poner la ruta en `contact.cv`.
- [ ] Año de grado en la USCO (`profile.graduationYear`).
- [ ] Confirmar el texto de "Sobre mí" en `src/components/About.tsx`, sobre todo el titular
      "Empecé construyendo páginas. Hoy construyo el sistema completo que hay detrás de ellas."
      y la frase sobre qué problemas te interesan.
- [ ] Dominio final del sitio (para `canonical`, `og:url` y sitemap).

## Bootcamp SIMPS (`id: 'simps'`)

- [ ] Qué significa "EA" en "en convenio con EA" (hoy se muestra tal cual).
- [ ] Fechas (`period`).
- [ ] Qué construiste o aprendiste (`role`, `features`, `stack`).
- [ ] Repositorio, si existe (`repo`). ¿Es `Krank2me/series-eafit`?

## Sitio web de S&G Immigration (`id: 'sg-web'`)

- [ ] URL del sitio (`url`).
- [ ] Tu rol y si fue individual o en equipo (`role`).
- [ ] Problema, solución y funcionalidades (`problem`, `solution`, `features`).
- [ ] Tecnologías (`stack`).
- [ ] Captura real: guardarla en `public/` y llenar `image` (`src` y `alt`).
- [ ] Confirmar que S&G autoriza aparecer en tu portafolio.

## ConnectArt (`id: 'connectart'`)

- [ ] Dominio (`url`) y repositorio (`repo`).
- [ ] Hosting o despliegue y tecnologías (`stack`).
- [ ] Rol, problema, solución y funcionalidades.
- [ ] Captura real (`image`).

## CRM de S&G (`id: 'crm'`, más `src/content/crm.ts`)

La estructura (pipeline, workflows publicados, formularios y 39 campos) se tomó del CRM real
en modo lectura el 6 de octubre de 2026. Falta confirmar:

- [ ] ¿Construiste tú todo lo que se muestra (pipeline, campos, 8 workflows, 2 formularios)?
- [ ] WhatsApp / Twilio: ¿está implementado? Hoy **no** se menciona en la página.
- [ ] Usuarios y roles configurados. Hoy **no** se mencionan.
- [ ] Si cambia la estructura del CRM, actualizar `src/content/crm.ts`.

## Otros proyectos (sin incluir todavía)

- [ ] ¿Incluir `zami16/NODO`, el reto técnico de nodo404 o `JAMLizca/Hestia`? Para revisarlos
      hay que dar acceso a esos repositorios en la sesión.
