# Sistema de diseño

El portafolio está diseñado como un **mapa de transporte**: cada disciplina es una línea y cada
proyecto una estación. Este documento describe el sistema tal como quedó construido. La
dirección y su razonamiento están en [`docs/DIRECTION.md`](docs/DIRECTION.md).

## Color

Todos los colores viven como variables en `src/styles/tokens.css`. Ningún componente usa un
color fijo, salvo el texto de los badges de línea.

| Token | Claro | Oscuro | Uso |
| --- | --- | --- | --- |
| `--ground` | `#F3F4F1` | `#121418` | Fondo de página |
| `--ground-raised` | `#FBFBF9` | `#191C21` | Banda del CRM, menú móvil |
| `--ink` | `#15171C` | `#E8E9E4` | Texto y bordes de estación |
| `--ink-muted` | `#50565E` | `#A4A9B0` | Texto secundario (6.7:1 / 7.8:1) |
| `--rule` | `#CFD2CB` | `#2E3239` | Separadores |
| `--line-formacion` | `#B8326B` | `#E8669C` | Línea Formación |
| `--line-web` | `#2348D8` | `#7593FF` | Línea Web |
| `--line-producto` | `#0B7F57` | `#3EBF8C` | Línea Producto |
| `--line-automatizacion` | `#E8641C` | `#FF8A3D` | Línea Automatización (solo trazo y relleno) |
| `--line-automatizacion-ink` | `#A8430A` | `#FF9A55` | Texto en color de automatización |

**Regla:** un color de línea siempre significa su disciplina. Si no codifica una línea, no se usa.
El modo oscuro sigue a `prefers-color-scheme`.

## Tipografía

- **Archivo Variable** (autoalojada) con ejes de peso y ancho.
  - Display: peso 850, ancho 125 %, tracking -0.035em.
  - Títulos de sección: peso 800, ancho 118 %.
  - Texto: peso 400-500, ancho 100 %.
- **JetBrains Mono Variable**: solo para identificadores reales del CRM (`contact.case_status`).
- Escala fluida `--step--1` a `--step-display` (máximo 6rem).

## Forma

- Contenedores rectos (radio 0). Bordes de 2px en tinta para marcos (navegador, entrada del pipeline).
- Botones, pestañas y badges de línea en píldora completa.
- Estaciones: círculo blanco con borde de tinta de 3.5px. Intercambios: cápsula.
- Líneas: 10px, extremos redondeados, diagonales a 45°.

## Movimiento

| Momento | Duración | Curva | Propósito |
| --- | --- | --- | --- |
| Trazado del mapa (hero) | 1300ms por línea, escalonado 140ms | `--ease-in-out` | Única orquestación de entrada |
| Aparición de estaciones | 420ms, escalonado 90ms | `--ease-out` | Acompaña el trazado |
| Recorrido del pipeline (CRM) | 2600ms, una vez | `--ease-in-out` | Explica cómo avanza un contacto |
| Pulsación de botón | 140ms, `scale(0.97)` | `--ease-out` | Respuesta táctil |
| Menú móvil | 200ms desde la esquina superior derecha | `--ease-out` | Origen en el disparador |
| Copiar correo | 220ms con blur de 2px | `--ease-out` | Cambio de estado sin superposición |

- Hover solo en `(hover: hover) and (pointer: fine)`.
- Con `prefers-reduced-motion: reduce` todo aparece en su estado final.
- Las animaciones de entrada usan `animation-fill-mode: backwards`: el contenido es visible
  por defecto y nunca depende de JavaScript para mostrarse.

## Componentes

| Componente | Archivo | Notas |
| --- | --- | --- |
| Mapa de líneas | `RouteMap.tsx` | Generado desde datos; versión horizontal y vertical |
| Encabezado de caso | `CaseParts.tsx` | Badges de línea delante del título, sin eyebrow |
| Caso CRM | `CrmCase.tsx` | Pipeline, horario de workflows y pestañas de campos |
| Línea de tiempo | `Journey.tsx` | Muestra años solo cuando todas las estaciones tienen uno |

## Lo que este sistema no hace

Sin gradientes, sin glassmorphism, sin eyebrows sobre los títulos, sin numeración 01/02/03,
sin cards iguales, sin capturas falsas y sin rayas de raya larga en el texto.
