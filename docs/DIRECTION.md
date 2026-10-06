# Dirección de diseño (documento interno, no se publica)

Contrato de dirección para el portafolio de Zahira Neira Murillo. Sirve para revisar
cualquier cambio futuro: si una decisión contradice este documento, se discute antes.

## Proceso seguido

- **Frontend Design / Impeccable (new-work):** modo *Experience* (portafolio). Se nombró el
  mecanismo único, se listaron mundos visuales candidatos y se descartaron los ruts.
- **Taste:** Design Read y diales. Prohibiciones aplicadas: sin em-dash, sin eyebrows,
  sin numeración 01/02/03, sin cards iguales, sin fake screenshots, sin scroll cues.
- **UI UX Pro Max:** `--design-system` sugirió *Scroll-Triggered Storytelling* por capítulos
  (adoptado) y una paleta rosa brutalista (descartada: no encaja con el sujeto).
  Tipografía: sugirió Archivo para titulares (adoptada, con eje de ancho).
- **Emil design-eng / mobile-native:** reglas de easing, duración, `:active`, hover con
  `(hover: hover) and (pointer: fine)`, `theme-color` por esquema, tap highlight.

**Design Read:** portafolio de desarrolladora para reclutadores y clientes remotos, con un
lenguaje de *mapa de sistema de transporte*, apoyado en CSS nativo + SVG generado desde datos.
Diales Taste: VARIANCE 7, MOTION 5, DENSITY 4.

## Rut descartado

1. Hero oscuro con acento neón y grilla de cards de proyectos (el portafolio dev por defecto).
2. Crema + serif de alto contraste + acento terracota/bermellón (era la propuesta inicial;
   Frontend Design lo identifica como el tell número 1).

## Candidatos considerados

1. **Mapa de transporte (Vignelli):** líneas = disciplinas, estaciones = proyectos. *Elegido.*
2. Expediente migratorio (carpetas, sellos, número de caso). Descartado: estetiza un trámite
   sensible para los clientes reales de S&G.
3. Tablero kanban del pipeline. Descartado: es la herramienta misma (disfraz).
4. Desierto de la Tatacoa (tierra roja + observatorio). Bonito, pero no explica su trabajo.
5. Plano técnico / blueprint. Rut de "tech".
6. Póster suizo tipográfico. Sin mecanismo propio.
7. Diploma / certificado universitario. Encasilla en "estudiante".

## THESIS

La carrera de Zahira dibujada como una red: cada disciplina es una línea, cada proyecto una
estación. El CRM, que literalmente mueve contactos por estaciones, es la terminal donde el
mapa se vuelve sistema real. Rechaza el hero centrado y la grilla de proyectos.

## OWN-WORLD

- Fondo `#F3F4F1` (blanco frío de señalética), tinta `#15171C`, texto secundario `#555B63`.
- Líneas (paleta completa, cada color codifica información):
  Formación `#B8326B` · Web `#2348D8` · Producto `#0B7F57` · Automatización `#E8641C`.
- Estaciones: círculos blancos con borde de tinta; intercambios como cápsulas.
- Tipografía: Archivo variable. Titulares en ancho 112-125 % y peso 800 (letrero);
  texto en ancho 100 %. JetBrains Mono solo para identificadores reales del CRM.
- Esquinas: contenedores rectos (0). Botones y badges de línea en píldora completa.

## STORY

El visitante ve primero el mapa completo (quién es y por dónde ha pasado), baja por los
proyectos ordenados de la formación al sistema completo, entiende en el CRM que construye
procesos empresariales, ve sus herramientas y termina en un contacto directo.

## FIRST VIEWPORT

Nombre completo en una línea ancha arriba a la izquierda. Debajo, a la izquierda: una frase
de 19 palabras y dos acciones (Ver proyectos, Contacto). A la derecha, el mapa de líneas
dibujándose una sola vez. Cada estación del mapa es un enlace a su caso.

## FORM

Mapa de transporte, posición 1 de 7. Sin semilla de concept-seed: el lanzador de
Impeccable no se ejecutó en este entorno (ver nota abajo).

## Interacción firma y movimiento

- Una sola orquestación al cargar: las líneas se trazan y las estaciones aparecen
  (ease-out fuerte, ~1.2 s, escalonado 60 ms).
- En el CRM, un marcador recorre una vez las 8 etapas reales del pipeline al entrar en
  pantalla (propósito: explicar cómo avanza un contacto).
- Microinteracciones: `:active` scale(0.97), copiar correo con transición de estado.
- `prefers-reduced-motion`: todo aparece en su estado final.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review,
the verdict, DESIGN.md, and every shipping raster carrying its provenance.

> Nota: el lanzador binario de Impeccable (`scripts/impeccable`) no se ejecutó porque
> descarga un binario externo en este contenedor. Se siguieron sus referencias
> (`new-work.md`, `craft-floor.md`, `audit.md`, `critique.md`, `polish.md`) leídas
> directamente.
