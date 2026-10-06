import { useState } from 'react';
import { lines, type LineId } from '../content/profile';
import './RouteMap.css';

/*
 * Mapa de líneas generado desde datos. Coordenadas abstractas:
 *   t    = avance en la trayectoria (orden narrativo, no fechas)
 *   lane = carril de cada disciplina
 * En escritorio t corre en horizontal; en móvil, en vertical. Con la misma
 * unidad en ambos ejes, todas las diagonales quedan a 45°.
 */

type Pt = [t: number, lane: number];

interface MapLine {
  id: LineId;
  points: Pt[];
}

interface MapStation {
  id: string;
  name: string;
  sub: string;
  t: number;
  lanes: number[];
  lines: LineId[];
  href: string;
  terminal?: boolean;
}

const DASH_FROM = 6.8;
const END = 7.6;

const mapLines: MapLine[] = [
  { id: 'formacion', points: [[0, 0], [END, 0]] },
  { id: 'web', points: [[2, 0], [3, 1], [END, 1]] },
  { id: 'producto', points: [[3.4, 1], [4.4, 2], [END, 2]] },
  { id: 'automatizacion', points: [[3, 1], [3, 2], [4, 3], [END, 3]] },
];

const stations: MapStation[] = [
  { id: 'usco', name: 'USCO', sub: 'Tecnóloga en software', t: 0, lanes: [0], lines: ['formacion'], href: '#sobre-mi' },
  { id: 'simps', name: 'SIMPS', sub: 'Bootcamp, EAFIT', t: 1.6, lanes: [0], lines: ['formacion'], href: '#simps' },
  { id: 'sg-web', name: 'S&G web', sub: 'Sitio web', t: 3, lanes: [1], lines: ['web', 'automatizacion'], href: '#sg-web' },
  { id: 'connectart', name: 'ConnectArt', sub: 'Sitio y producto', t: 4.4, lanes: [1, 2], lines: ['web', 'producto'], href: '#connectart' },
  { id: 'crm', name: 'CRM S&G', sub: 'GoHighLevel', t: 6, lanes: [3], lines: ['automatizacion'], href: '#crm' },
  {
    id: 'next',
    name: 'Lo que sigue',
    sub: 'Software y producto',
    t: END,
    lanes: [0, 1, 2, 3],
    lines: ['formacion', 'web', 'producto', 'automatizacion'],
    href: '#contacto',
    terminal: true,
  },
];

type Orientation = 'horizontal' | 'vertical';

interface Geometry {
  unit: number;
  pad: { x: number; y: number };
  width: number;
  height: number;
  point: (p: Pt) => [number, number];
}

function geometry(orientation: Orientation): Geometry {
  if (orientation === 'horizontal') {
    const unit = 100;
    const pad = { x: 40, y: 78 };
    return {
      unit,
      pad,
      width: END * unit + pad.x * 2,
      height: 3 * unit + pad.y * 2,
      point: ([t, lane]) => [pad.x + t * unit, pad.y + lane * unit],
    };
  }
  const unit = 50;
  const pad = { x: 22, y: 24 };
  return {
    unit,
    pad,
    width: 360,
    height: END * unit + pad.y * 2,
    point: ([t, lane]) => [pad.x + lane * unit, pad.y + t * unit],
  };
}

function toPath(pts: Pt[], g: Geometry) {
  return pts.map((p, i) => `${i ? 'L' : 'M'}${g.point(p).join(' ')}`).join(' ');
}

/** Separa cada línea en tramo sólido (recorrido) y tramo punteado (lo que sigue). */
function splitLine(line: MapLine): { solid: Pt[]; future: Pt[] } {
  const last = line.points[line.points.length - 1];
  const solid = [...line.points.slice(0, -1), [DASH_FROM, last[1]] as Pt];
  return { solid, future: [[DASH_FROM, last[1]], last] };
}

function labelPosition(s: MapStation, g: Geometry, o: Orientation) {
  const top = Math.min(...s.lanes);
  const bottom = Math.max(...s.lanes);
  if (o === 'vertical') {
    const [, y] = g.point([s.t, 0]);
    return { x: g.pad.x + 3 * g.unit + 34, y: y - 6, anchor: 'start' as const };
  }
  const [x, yTop] = g.point([s.t, top]);
  const [, yBottom] = g.point([s.t, bottom]);
  switch (s.id) {
    case 'usco':
    case 'simps':
      return { x: x - 10, y: yTop - 54, anchor: 'start' as const };
    case 'sg-web':
      return { x: x + 18, y: yTop - 54, anchor: 'start' as const };
    case 'connectart':
      return { x: x + 26, y: (yTop + yBottom) / 2 - 16, anchor: 'start' as const };
    case 'crm':
      return { x: x - 10, y: yBottom + 30, anchor: 'start' as const };
    default:
      return { x: x + 12, y: yTop - 60, anchor: 'end' as const };
  }
}

function Station({
  s,
  g,
  o,
  index,
  onFocusLines,
}: {
  s: MapStation;
  g: Geometry;
  o: Orientation;
  index: number;
  onFocusLines: (l: LineId[] | null) => void;
}) {
  const [x1, y1] = g.point([s.t, Math.min(...s.lanes)]);
  const [x2, y2] = g.point([s.t, Math.max(...s.lanes)]);
  const r = s.terminal ? 13 : 10;
  const label = labelPosition(s, g, o);
  const interchange = s.lanes.length > 1;

  return (
    <a
      className="route-station"
      href={s.href}
      aria-label={`${s.name}: ${s.sub}`}
      onMouseEnter={() => onFocusLines(s.lines)}
      onMouseLeave={() => onFocusLines(null)}
      onFocus={() => onFocusLines(s.lines)}
      onBlur={() => onFocusLines(null)}
      style={{ ['--i' as string]: index }}
      data-terminal={s.terminal || undefined}
    >
      {/* Área táctil amplia, invisible */}
      <rect
        className="route-station__hit"
        x={Math.min(x1, x2) - 24}
        y={Math.min(y1, y2) - 24}
        width={Math.abs(x2 - x1) + 48}
        height={Math.abs(y2 - y1) + 48}
      />
      <g className="route-station__mark" style={{ transformOrigin: `${(x1 + x2) / 2}px ${(y1 + y2) / 2}px` }}>
        {interchange ? (
          <rect
            x={Math.min(x1, x2) - r}
            y={Math.min(y1, y2) - r}
            width={Math.abs(x2 - x1) + r * 2}
            height={Math.abs(y2 - y1) + r * 2}
            rx={r}
            className="route-station__dot"
          />
        ) : (
          <circle cx={x1} cy={y1} r={r} className="route-station__dot" />
        )}
      </g>
      <text className="route-station__label" x={label.x} y={label.y} textAnchor={label.anchor}>
        <tspan className="route-station__name" x={label.x} dy="1em">
          {s.name}
        </tspan>
        <tspan className="route-station__sub" x={label.x} dy="1.45em">
          {s.sub}
        </tspan>
      </text>
    </a>
  );
}

function RouteSvg({ orientation }: { orientation: Orientation }) {
  const g = geometry(orientation);
  const [focused, setFocused] = useState<LineId[] | null>(null);

  return (
    <svg
      className={`route route--${orientation}`}
      viewBox={`0 0 ${g.width} ${g.height}`}
      data-focus={focused ? '' : undefined}
    >
      <g aria-hidden="true">
        {mapLines.map((line, i) => {
          const { solid, future } = splitLine(line);
          const active = focused?.includes(line.id);
          return (
            <g key={line.id} data-line={line.id} className="route-line" data-active={active || undefined}>
              <path className="route-line__solid" d={toPath(solid, g)} pathLength={1} style={{ ['--i' as string]: i }} />
              <path className="route-line__future" d={toPath(future, g)} />
            </g>
          );
        })}
      </g>
      {stations.map((s, i) => (
        <Station key={s.id} s={s} g={g} o={orientation} index={i} onFocusLines={setFocused} />
      ))}
    </svg>
  );
}

export default function RouteMap() {
  return (
    <nav className="route-map" aria-label="Mapa de proyectos">
      <div className="route-map__h">
        <RouteSvg orientation="horizontal" />
      </div>
      <div className="route-map__v">
        <RouteSvg orientation="vertical" />
      </div>
      <ul className="route-legend" aria-label="Líneas">
        {Object.values(lines).map((l) => (
          <li key={l.id} data-line={l.id}>
            <span className="line-badge" aria-hidden="true">
              {l.badge}
            </span>
            {l.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
