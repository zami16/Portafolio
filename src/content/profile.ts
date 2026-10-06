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
  /** Resultados verificables. Nada de métricas inventadas. */
  results: string[];
  /** Etapas reales del proyecto, en orden. */
  process: { when: string; what: string }[];
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
    results: [],
    process: [],
    image: null,
  },
  {
    id: 'sg-web',
    station: 'S&G web',
    name: 'Sitio web de S&G Group',
    lines: ['web'],
    summary:
      'Sitio bilingüe para S&G Group LLC, una firma de Owings Mills, Maryland, que atiende a la comunidad latina en Estados Unidos con servicios de inmigración, impuestos y seguros.',
    role: 'Freelance. Desarrollo full-stack de principio a fin: arquitectura, maquetación, integraciones, SEO, despliegue y mantenimiento',
    problem:
      'Que cada cliente encuentre el servicio que necesita y agende una consulta, y que la firma publique contenido sin depender del desarrollador.',
    solution: null,
    features: [
      'Nueve secciones en español e inglés, con rutas por idioma',
      'Blog con calendario editorial de 18 artículos que se publican solos en su fecha, con revisión legal previa',
      'SEO técnico: metadatos, datos estructurados, sitemap automático y enlazado interno',
      'Reels, casos de éxito y reseñas administrados desde Google Sheets, con moderación antes de publicarse',
      'Formularios de contacto, agendamiento y reseñas, con correos enviados por Resend desde el dominio propio',
      'Identidad azul marino y dorado, animaciones al hacer scroll y botón flotante de WhatsApp',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'next-intl', 'Resend', 'Google Sheets y Apps Script', 'Vercel'],
    period: 'Junio a octubre de 2026',
    status: null,
    url: 'https://sggroupmd.com/es',
    repos: [],
    team: null,
    contributions: [],
    results: [
      'El equipo de marketing publica contenido sin tocar código',
      'Preparado para posicionar búsquedas como "abogado de inmigración en Maryland"',
    ],
    process: [],
    image: null,
  },
  {
    id: 'connectart',
    station: 'ConnectArt',
    name: 'ConnectArt',
    lines: ['web', 'producto'],
    summary:
      'Sitio oficial de ConnectArt, una agencia de producción audiovisual y marketing digital de Neiva. Muestra su portafolio con una estética editorial oscura y convierte visitas en clientes por WhatsApp.',
    role: 'Freelance. Diseño UI/UX, desarrollo frontend, optimización y despliegue',
    problem: null,
    solution: null,
    features: [
      'Carrito de cotización sin precios que arma un mensaje de WhatsApp con los servicios elegidos',
      'Formulario de contacto conectado a WhatsApp',
      'Portafolio en mosaico editorial con CSS Grid, servicios por pestañas y videos que cargan al llegar a ellos',
      'Animaciones al hacer scroll, contadores y cursor propio, todo respetando la opción de reducir movimiento',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'CSS con design tokens', 'next/image', 'next/font', 'ffmpeg', 'WebP'],
    period: 'Abril a octubre de 2026',
    status: 'En línea está la versión 1; la versión nueva está en proceso de despliegue',
    urlLabel: 'Ver sitio publicado',
    url: 'https://connectart.online',
    repos: [],
    team: null,
    contributions: [],
    results: [
      'Imágenes y videos de unos 203 MB a unos 14 MB, un 93 % menos',
      'Contraste llevado a WCAG AA: antes fallaban 17 de 20 estilos de texto',
      'SEO completo: metadatos, sitemap, robots y tarjeta para redes sociales',
      'Navegación por teclado, etiquetas accesibles y diseño para celular, tablet y escritorio',
    ],
    process: [
      { when: 'Abril y mayo de 2026', what: 'Versión 1: sitio estático en HTML, CSS y JavaScript' },
      { when: 'Mayo de 2026', what: 'Migración a Next.js y componentes de React' },
      { when: 'Octubre de 2026', what: 'Auditoría de UX, accesibilidad, rendimiento y SEO; refactor en más de 20 componentes' },
    ],
    image: null,
  },
  {
    id: 'crm',
    station: 'HEBRIX',
    name: 'HEBRIX',
    lines: ['automatizacion'],
    summary:
      'Plataforma CRM de marca propia, construida sobre GoHighLevel en modo agencia para venderse por suscripción a negocios en Estados Unidos. Su primer cliente en producción es S&G Group LLC.',
    role: 'Diseño e implementación de la plataforma y soporte técnico',
    problem: null,
    solution: null,
    features: [],
    stack: [
      'GoHighLevel (agencia / SaaS)',
      'LeadConnector (LC Phone / Twilio)',
      'Workflows',
      'API REST de GHL',
      'DNS en Namecheap',
      'CSS',
      'Meta Business',
      'Google Workspace',
    ],
    period: 'Agosto a noviembre de 2026, 12 semanas',
    status: 'Primer cliente en producción; entrega el 21 de noviembre de 2026',
    urlLabel: 'Ver plataforma',
    url: 'https://app.hebrix.io',
    repos: [],
    team: null,
    contributions: [],
    results: [
      'Una plataforma lista para venderse por suscripción, con un primer cliente en producción y una estructura reutilizable para nuevos sectores.',
    ],
    process: [],
    image: null,
  },
];

/** En orden cronológico. */
export const journey = [
  {
    id: 'usco',
    title: profile.degree,
    place: profile.university,
    line: 'formacion' as LineId,
    period: profile.graduationYear ? String(profile.graduationYear) : null,
    href: '#sobre-mi',
  },
  {
    id: 'simps',
    title: 'Bootcamp SIMPS: Nodo Store',
    place: 'Universidad EAFIT y Electronic Arts',
    line: 'formacion' as LineId,
    period: 'Nov 2025 - jun 2026' as string | null,
    href: '#simps',
  },
  {
    id: 'connectart',
    title: 'Sitio de ConnectArt',
    place: 'Freelance, Neiva',
    line: 'producto' as LineId,
    period: 'Abr - oct 2026' as string | null,
    href: '#connectart',
  },
  {
    id: 'sg-web',
    title: 'Sitio bilingüe de S&G Group',
    place: 'Freelance, Maryland',
    line: 'web' as LineId,
    period: 'Jun - oct 2026' as string | null,
    href: '#sg-web',
  },
  {
    id: 'crm',
    title: 'HEBRIX, CRM de marca propia',
    place: 'Primer cliente: S&G Group',
    line: 'automatizacion' as LineId,
    period: 'Ago - nov 2026' as string | null,
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
  { name: 'Interfaz', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { name: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JWT'] },
  { name: 'Datos', items: ['SQL', 'PostgreSQL', 'Google Sheets y Apps Script'] },
  { name: 'Despliegue e integraciones', items: ['Vercel', 'Resend', 'DNS', 'Git y GitHub'] },
  {
    name: 'CRM y automatización',
    items: ['GoHighLevel', 'LeadConnector y Twilio', 'Workflows', 'API REST de GHL', 'Meta Business'],
    line: 'automatizacion',
  },
];
