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
  email: 'zaminemu0816@gmail.com' as string | null,
  github: 'https://github.com/zami16' as string | null,
  phone: '+57 321 255 9191' as string | null,
  linkedin: 'https://www.linkedin.com/in/zahira-neira-48b307311/' as string | null,
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
  /** Texto del botón del sitio en vivo. */
  urlLabel?: string;
  url: string | null;
  repos: { label: string; href: string }[];
  /** Con quién se hizo, si fue en equipo. */
  team: string | null;
  /** Lo que hizo Zahira, agrupado por área. */
  contributions: { area: string; items: string[] }[];
  /** Captura real del proyecto dentro de /public. */
  image: { src: string; alt: string } | null;
}

export const projects: Project[] = [
  {
    id: 'simps',
    station: 'SIMPS',
    name: 'Nodo Store',
    lines: ['formacion'],
    summary:
      'Tienda en línea de expansiones de Los Sims 4, construida en el bootcamp SIMPS de la Universidad EAFIT en convenio con Electronic Arts (EA).',
    role: 'Desarrollo frontend y backend dentro del equipo',
    problem: null,
    solution: null,
    features: [
      'Catálogo, carrito y compras',
      'Registro e inicio de sesión con formulario, Google y Facebook',
      'Programa Beta Tester y panel de administración',
      'Contenido en español e inglés, tema claro y oscuro',
    ],
    stack: ['React', 'Vite', 'Zustand', 'Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'],
    period: 'Noviembre de 2025 a junio de 2026',
    status: null,
    urlLabel: 'Ver aplicación',
    url: 'https://nodo404.vercel.app',
    repos: [
      { label: 'Código frontend', href: 'https://github.com/mateoPosada82231/front-reto-tecnico-nodo404' },
      { label: 'Código backend', href: 'https://github.com/mateoPosada82231/reto-tecnico-nodo-nodo404' },
    ],
    team: 'Equipo Nodo 404',
    contributions: [
      {
        area: 'Backend',
        items: [
          'Configuración base de autenticación con JWT y Spring Security',
          'Repositorios y servicios de usuarios, extensiones y compras',
          'Entidad y repositorio del carrito',
          'Correos de confirmación de compra y de cambio de contraseña',
        ],
      },
      {
        area: 'Frontend',
        items: [
          'Estructura base, enrutamiento y layout global',
          'Página de perfil con campos editables',
          'Panel lateral del carrito de compras',
        ],
      },
    ],
    image: null,
  },
  {
    id: 'sg-web',
    station: 'S&G web',
    name: 'Sitio web de S&G Immigration',
    lines: ['web'],
    summary: 'Sitio de una empresa de servicios migratorios en Maryland, Estados Unidos, con versión en español para sus clientes.',
    role: null,
    problem: null,
    solution: null,
    features: [],
    stack: [],
    period: null,
    status: null,
    url: 'https://sggroupmd.com/es',
    repos: [],
    team: null,
    contributions: [],
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
    url: 'https://connectart.online',
    repos: [],
    team: null,
    contributions: [],
    image: null,
  },
  {
    id: 'crm',
    station: 'CRM S&G',
    name: 'CRM de S&G Immigration',
    lines: ['automatizacion'],
    summary:
      'El sistema que organiza la operación comercial de S&G Immigration en GoHighLevel: cómo entra un contacto, por qué etapas pasa y qué se automatiza.',
    role: 'Lo construí completo',
    problem: null,
    solution: null,
    features: [
      'WhatsApp integrado para la comunicación con clientes',
      'Telefonía con Twilio',
      'Usuarios con roles y permisos',
    ],
    stack: ['GoHighLevel'],
    period: 'Desde agosto de 2026',
    status: 'Funcionando, con mejoras en curso',
    url: null,
    repos: [],
    team: null,
    contributions: [],
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
    place: 'Universidad EAFIT y Electronic Arts',
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
  { name: 'Interfaz', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'] },
  { name: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JWT'] },
  { name: 'Datos', items: ['SQL', 'PostgreSQL'] },
  {
    name: 'CRM y automatización',
    items: ['GoHighLevel', 'Pipelines', 'Workflows', 'Formularios', 'Campos personalizados'],
    line: 'automatizacion',
  },
];
