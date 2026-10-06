/**
 * Fuente única de verdad del portafolio.
 *
 * Regla: aquí solo entran datos confirmados. Lo que falta se deja en `null`
 * (o en un arreglo vacío) y el componente correspondiente simplemente no lo muestra.
 * La lista completa de lo que falta está en PENDIENTES.md.
 */

export type LineId = 'formacion' | 'web' | 'producto' | 'automatizacion';

export interface Line {
  id: LineId;
  name: string;
  /** Letra del badge de línea, como en un mapa de transporte. */
  badge: string;
}

export const lines: Record<LineId, Line> = {
  formacion: { id: 'formacion', name: 'Formación', badge: 'F' },
  web: { id: 'web', name: 'Web', badge: 'W' },
  producto: { id: 'producto', name: 'Producto', badge: 'P' },
  automatizacion: { id: 'automatizacion', name: 'Automatización', badge: 'A' },
};

export const profile = {
  name: 'Zahira Neira Murillo',
  shortName: 'Zahira Neira',
  role: 'Desarrolladora de software',
  age: 20,
  city: 'Neiva, Colombia',
  degree: 'Tecnóloga en Desarrollo de Software',
  university: 'Universidad Surcolombiana',
  universityShort: 'USCO',
  /** Año de grado. PENDIENTE. */
  graduationYear: null as number | null,
  statement:
    'Desarrollo software y los sistemas que lo rodean: sitios, productos y la automatización que convierte un contacto en cliente.',
  seeking: 'Trabajo remoto en desarrollo de software y de producto.',
};

export const contact = {
  /** Confirmar que este es el correo que quieres publicar. */
  email: 'zaminemu0816@gmail.com' as string | null,
  github: 'https://github.com/zami16' as string | null,
  /** PENDIENTE */
  linkedin: null as string | null,
  /** PENDIENTE. Ruta a un PDF dentro de /public, por ejemplo '/cv-zahira-neira.pdf'. */
  cv: null as string | null,
};

export interface Project {
  id: string;
  /** Estación del mapa: nombre corto. */
  station: string;
  name: string;
  lines: LineId[];
  /** Una frase. Qué es. */
  summary: string;
  /** Rol de Zahira en sus propias palabras. */
  role: string | null;
  problem: string | null;
  solution: string | null;
  features: string[];
  stack: string[];
  /** Periodo legible, por ejemplo 'Ago 2026 - hoy'. */
  period: string | null;
  status: string | null;
  url: string | null;
  repo: string | null;
  /** Captura real del proyecto dentro de /public. */
  image: { src: string; alt: string } | null;
}

export const projects: Project[] = [
  {
    id: 'simps',
    station: 'SIMPS',
    name: 'Bootcamp SIMPS',
    lines: ['formacion'],
    summary:
      'Bootcamp realizado directamente con la Universidad EAFIT, en convenio con EA.',
    role: null,
    problem: null,
    solution: null,
    features: [],
    stack: [],
    period: null,
    status: null,
    url: null,
    repo: null,
    image: null,
  },
  {
    id: 'sg-web',
    station: 'S&G web',
    name: 'Sitio web de S&G Immigration',
    lines: ['web'],
    summary: 'Sitio web para S&G Immigration, empresa de servicios migratorios en Estados Unidos.',
    role: null,
    problem: null,
    solution: null,
    features: [],
    stack: [],
    period: null,
    status: null,
    url: null,
    repo: null,
    image: null,
  },
  {
    id: 'connectart',
    station: 'ConnectArt',
    name: 'ConnectArt',
    lines: ['web', 'producto'],
    summary: 'Sitio y producto digital: diseño, implementación, dominio y despliegue.',
    role: null,
    problem: null,
    solution: null,
    features: [],
    stack: [],
    period: null,
    status: null,
    url: null,
    repo: null,
    image: null,
  },
  {
    id: 'crm',
    station: 'CRM S&G',
    name: 'CRM de S&G Immigration',
    lines: ['automatizacion'],
    summary:
      'El sistema que organiza la operación comercial de S&G Immigration en GoHighLevel: cómo entra un contacto, por qué etapas pasa y qué se automatiza.',
    role: 'Desarrollo del CRM',
    problem: null,
    solution: null,
    features: [],
    stack: ['GoHighLevel'],
    period: 'Desde agosto de 2026',
    status: 'En desarrollo',
    url: null,
    repo: null,
    image: null,
  },
];

export const journey = [
  {
    id: 'usco',
    station: 'USCO',
    title: profile.degree,
    place: profile.university,
    line: 'formacion' as LineId,
    year: profile.graduationYear,
    href: '#sobre-mi',
  },
  {
    id: 'simps',
    station: 'SIMPS',
    title: 'Bootcamp SIMPS',
    place: 'Universidad EAFIT, en convenio con EA',
    line: 'formacion' as LineId,
    year: null as number | null,
    href: '#simps',
  },
  {
    id: 'sg-web',
    station: 'S&G web',
    title: 'Sitio web',
    place: 'S&G Immigration',
    line: 'web' as LineId,
    year: null as number | null,
    href: '#sg-web',
  },
  {
    id: 'connectart',
    station: 'ConnectArt',
    title: 'Sitio y producto',
    place: 'ConnectArt',
    line: 'producto' as LineId,
    year: null as number | null,
    href: '#connectart',
  },
  {
    id: 'crm',
    station: 'CRM S&G',
    title: 'CRM en GoHighLevel',
    place: 'S&G Immigration',
    line: 'automatizacion' as LineId,
    year: 2026,
    href: '#crm',
  },
];

export interface StackGroup {
  name: string;
  items: string[];
  line?: LineId;
}

/** Solo tecnologías confirmadas. Agrega aquí las que falten. */
export const stack: StackGroup[] = [
  { name: 'Interfaz', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { name: 'Backend', items: ['Java', 'Spring Boot'] },
  { name: 'Datos', items: ['SQL', 'PostgreSQL'] },
  {
    name: 'CRM y automatización',
    items: ['GoHighLevel', 'Pipelines', 'Workflows', 'Formularios', 'Campos personalizados'],
    line: 'automatizacion',
  },
];
