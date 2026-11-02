import type { FaqItem } from "@/lib/seo";

export interface FeaturePageData {
  slug: string;
  code: string;
  category: string;
  shortTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  keywords: string[];
  updatedAt: string;
  keyMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  problemStatement: {
    heading: string;
    paragraphs: string[];
  };
  architectureSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  highlights: {
    title: string;
    description: string;
    tag: string;
  }[];
  relatedBlogSlugs: string[];
  faqs: FaqItem[];
}

export const FEATURES_DATA: FeaturePageData[] = [
  {
    slug: "control-de-gastos",
    code: "MOD-01",
    category: "Flujo de Caja Diario",
    shortTitle: "Control de Gastos",
    title: "App para Controlar Gastos e Ingresos Diarios sin Fricción",
    metaTitle: "App para Controlar Gastos e Ingresos Gratis y Offline",
    metaDescription:
      "Registra y clasifica tus gastos diarios e ingresos en segundos con Finance Pal. 15 categorías universales, filtros inteligentes y cero conexión bancaria.",
    heroSubtitle:
      "Un libro mayor personal diseñado para registrar cada movimiento en menos de cinco segundos, detectar gastos hormiga y visualizar hacia dónde fluye tu dinero cada mes.",
    keywords: [
      "app para controlar gastos",
      "control de gastos personales",
      "registrar gastos diarios",
      "app control de gastos gratis",
      "gestor de gastos e ingresos",
      "gastos hormiga",
    ],
    updatedAt: "2026-11-02",
    keyMetrics: [
      {
        label: "Taxonomía Universal",
        value: "15",
        detail: "Categorías limpias sin submenús infinitos",
      },
      {
        label: "Tiempo de Registro",
        value: "< 5 s",
        detail: "Captura táctil inmediata offline",
      },
      {
        label: "Latencia de Consulta",
        value: "0 ms",
        detail: "Búsqueda instantánea en memoria local",
      },
    ],
    problemStatement: {
      heading: "Por qué fracasan las hojas de cálculo y las apps bancarias tradicionales",
      paragraphs: [
        "La mayoría de las personas abandona el registro de gastos durante la segunda semana porque las aplicaciones convencionales exigen clasificar cada café en docenas de subcategorías confusas, muestran publicidad invasiva o requieren sincronización en la nube con tiempos de carga lentos.",
        "Por otro lado, depender únicamente del estado de cuenta bancario impide ver los pagos en efectivo, mezcla transferencias propias con gastos reales y entrega tu historial de consumo a intermediarios comerciales.",
        "Finance Pal resuelve esta fricción aplicando la estética y precisión de un cuaderno contable de alta dirección: una taxonomía cerrada de 15 categorías universales, filtros combinados por fecha, método o tipo de flujo, y almacenamiento 100% Local-First.",
      ],
    },
    architectureSteps: [
      {
        step: "01",
        title: "Captura inmediata de ingresos y egresos",
        description:
          "Introduce el monto, selecciona entre las 15 categorías universales (Alimentación, Vivienda, Transporte, Salud, Suscripciones, Ingresos Fijos, etc.) y añade una nota opcional. Funciona incluso en modo avión.",
      },
      {
        step: "02",
        title: "Separación clara entre gastos fijos y variables",
        description:
          "Identifica qué proporción de tus salidas corresponde a compromisos estructurales y cuánto se destina a consumo discrecional o gastos hormiga.",
      },
      {
        step: "03",
        title: "Auditoría mensual con filtros multicriterio",
        description:
          "Filtra tu historial por rango de fechas, categoría específica, palabra clave o tipo de transacción con respuesta instantánea en milisegundos.",
      },
    ],
    highlights: [
      {
        tag: "TAXONOMÍA",
        title: "15 categorías calibradas para la vida real",
        description:
          "Ni tan pocas que todo termine en «Otros», ni tantas que te paralicen al elegir. Cada categoría posee iconografía y semántica cromática propia.",
      },
      {
        tag: "VELOCIDAD",
        title: "Búsqueda y filtrado en tiempo real",
        description:
          "Localiza cualquier recibo, pago o ingreso histórico al instante combinando texto libre, categoría y mes contable.",
      },
      {
        tag: "SOBERANÍA",
        title: "Sin rastreo publicitario ni venta de hábitos",
        description:
          "Tus patrones de consumo jamás salen de tu teléfono ni alimentan perfiles de riesgo crediticio.",
      },
    ],
    relatedBlogSlugs: [
      "como-hacer-un-presupuesto-personal",
      "como-ahorrar-dinero",
      "mejores-apps-de-finanzas-personales",
    ],
    faqs: [
      {
        category: "Control de Gastos",
        question: "¿Puedo registrar gastos en efectivo y con tarjeta sin conectar mi banco?",
        answer:
          "Sí. Finance Pal está diseñado específicamente para el registro manual rápido tanto de efectivo como de transferencias o tarjetas, sin pedirte jamás claves bancarias.",
      },
      {
        category: "Control de Gastos",
        question: "¿Qué pasa si me equivoco al registrar un gasto?",
        answer:
          "Puedes editar el importe, la categoría, la fecha o la nota de cualquier movimiento en cualquier momento, o eliminarlo con recálculo instantáneo de tu balance mensual.",
      },
      {
        category: "Control de Gastos",
        question: "¿Puedo usar la app para controlar gastos sin internet?",
        answer:
          "Totalmente. El motor Local-First guarda cada movimiento directamente en tu dispositivo, por lo que puedes anotar gastos en el transporte público, viajes o zonas sin cobertura.",
      },
    ],
  },
  {
    slug: "presupuesto-personal",
    code: "MOD-02",
    category: "Visión Macroeconómica",
    shortTitle: "Presupuesto Personal",
    title: "App de Presupuesto Personal y Balance Patrimonial Mensual",
    metaTitle: "App de Presupuesto Personal Gratis | Balance y Tasa de Ahorro",
    metaDescription:
      "Organiza tu presupuesto personal mensual, calcula tu tasa de ahorro real y aplica la regla 50/30/20 con el panel macroeconómico de Finance Pal.",
    heroSubtitle:
      "Transforma ingresos y gastos aislados en un diagnóstico financiero claro: balance neto mensual, tasa de ahorro porcentual y distribución real de tu presupuesto.",
    keywords: [
      "app de presupuesto personal",
      "presupuesto mensual app",
      "organizar finanzas personales",
      "calcular tasa de ahorro",
      "regla 50 30 20 app",
      "flujo de caja personal",
    ],
    updatedAt: "2026-11-02",
    keyMetrics: [
      {
        label: "Métricas Clave",
        value: "4 KPI",
        detail: "Balance neto, ingresos, gastos y tasa de ahorro",
      },
      {
        label: "Precisión Numérica",
        value: "Tabular",
        detail: "Cifras alineadas en tipografía monoespaciada",
      },
      {
        label: "Modo Discreto",
        value: "1 Toque",
        detail: "Oculta importes sensibles frente a terceros",
      },
    ],
    problemStatement: {
      heading: "Un presupuesto útil no es una cárcel de restricciones, sino un mapa de decisiones",
      paragraphs: [
        "La razón principal por la que los presupuestos tradicionales fallan es la falta de visibilidad inmediata sobre el margen de maniobra real del mes. Si no sabes de un vistazo cuánto has ingresado, cuánto has comprometido y cuál es tu tasa de ahorro neta, cualquier imprevisto desordena tu planificación.",
        "El panel principal de Finance Pal consolida tu actividad en un resumen macroeconómico limpio. En lugar de saturar la pantalla con gráficas decorativas, presenta tus cuatro indicadores patrimoniales fundamentales con semántica de color editorial: esmeralda para ingresos, terracota para egresos y cobalto para ahorro e inversión.",
      ],
    },
    architectureSteps: [
      {
        step: "01",
        title: "Consolidación automática del balance neto",
        description:
          "Cada vez que registras un ingreso o un gasto, el panel recalcula instantáneamente tu flujo neto del periodo y tu margen disponible.",
      },
      {
        step: "02",
        title: "Monitoreo de la tasa de ahorro real",
        description:
          "Visualiza qué porcentaje exacto de tus ingresos estás conservando este mes y compáralo con referencias saludables como el 20% de la regla 50/30/20.",
      },
      {
        step: "03",
        title: "Distribución porcentual por categoría",
        description:
          "Detecta en segundos qué rubros absorben la mayor parte de tu presupuesto mensual para ajustar a tiempo antes de cerrar el mes.",
      },
    ],
    highlights: [
      {
        tag: "DIAGNÓSTICO",
        title: "Indicadores macroeconómicos al abrir la app",
        description:
          "Consulta tu liquidez, ingresos acumulados, gastos totales y porcentaje de retención patrimonial sin navegar por menús complejos.",
      },
      {
        tag: "PRIVACIDAD VISUAL",
        title: "Modo discreto (Privacy Blur) instantáneo",
        description:
          "Reemplaza todas las cifras monetarias por asteriscos con un solo toque cuando revises tu presupuesto en lugares públicos.",
      },
      {
        tag: "ARQUITECTURA",
        title: "Compatible con el método 50/30/20 y presupuesto base cero",
        description:
          "Las categorías y el resumen mensual te permiten auditar fácilmente tus necesidades básicas, gastos personales y ahorro.",
      },
    ],
    relatedBlogSlugs: [
      "como-hacer-un-presupuesto-personal",
      "regla-50-30-20",
      "fondo-de-emergencia",
    ],
    faqs: [
      {
        category: "Presupuesto Personal",
        question: "¿Cómo calcula Finance Pal la tasa de ahorro mensual?",
        answer:
          "La aplicación resta tus gastos totales del mes a tus ingresos totales y divide el excedente entre los ingresos, mostrándote el porcentaje exacto de capital retenido.",
      },
      {
        category: "Presupuesto Personal",
        question: "¿Sirve para aplicar la regla 50/30/20?",
        answer:
          "Sí. Al clasificar tus movimientos en las 15 categorías y observar el desglose porcentual en el panel, puedes verificar de inmediato si tus gastos básicos, estilo de vida y ahorro cumplen la proporción 50/30/20.",
      },
    ],
  },
  {
    slug: "metas-de-ahorro",
    code: "MOD-03",
    category: "Planificación Patrimonial",
    shortTitle: "Metas de Ahorro",
    title: "App para Ahorrar Dinero con Metas Jerárquicas Drag & Drop",
    metaTitle: "App para Ahorrar Dinero y Metas de Ahorro | Finance Pal",
    metaDescription:
      "Crea metas de ahorro con submódulos jerárquicos Drag & Drop, barra de progreso física y cálculo automático de ahorro diario necesario.",
    heroSubtitle:
      "Desglosa grandes objetivos financieros —como tu fondo de emergencia, un viaje o la compra de equipo— en metas jerárquicas medibles con ritmo diario automático.",
    keywords: [
      "app para ahorrar dinero",
      "metas de ahorro",
      "app metas de ahorro",
      "como ahorrar para una meta",
      "calculadora de ahorro diario",
      "fondo de emergencia app",
    ],
    updatedAt: "2026-11-02",
    keyMetrics: [
      {
        label: "Estructura",
        value: "Jerárquica",
        detail: "Metas principales y sub-objetivos reordenables",
      },
      {
        label: "Interacción",
        value: "Drag & Drop",
        detail: "Prioriza objetivos arrastrando con física táctil",
      },
      {
        label: "Proyección",
        value: "Cuota Diaria",
        detail: "Cálculo automático según fecha límite",
      },
    ],
    problemStatement: {
      heading: "Ahorrar sin un objetivo estructurado suele terminar en gasto diferido",
      paragraphs: [
        "Guardar «lo que sobre a fin de mes» rara vez funciona. Cuando el dinero ahorrado no tiene nombre, prioridad ni fecha objetivo, cualquier compra impulsiva parece justificada.",
        "En Finance Pal v2.0.0 rediseñamos por completo el módulo de metas de ahorro: ahora puedes estructurar objetivos compuestos (por ejemplo, «Equipamiento de Trabajo» dividido en computadora, monitor y respaldo), reordenar su prioridad mediante Drag & Drop y conocer exactamente cuánto necesitas apartar por día o por mes para llegar a la fecha meta.",
      ],
    },
    architectureSteps: [
      {
        step: "01",
        title: "Define el monto objetivo y la fecha límite",
        description:
          "Crea una meta principal indicando la cantidad total que deseas reunir y el horizonte temporal en el que planeas alcanzarla.",
      },
      {
        step: "02",
        title: "Organiza prioridades con Drag & Drop",
        description:
          "Arrastra y reordena tus metas según tu urgencia actual: primero tu fondo de emergencia, después amortización o proyectos personales.",
      },
      {
        step: "03",
        title: "Registra abonos y sigue el ritmo diario",
        description:
          "Cada aportación actualiza la barra de progreso con física elástica y recalcula cuánto te falta ahorrar por día para cumplir a tiempo.",
      },
    ],
    highlights: [
      {
        tag: "JERARQUÍA V2",
        title: "Metas compuestas y priorización táctil",
        description:
          "Divide proyectos grandes en etapas alcanzables y ordénalos visualmente con soporte completo para teclado y pantalla táctil.",
      },
      {
        tag: "RITMO PREDICTIVO",
        title: "Cálculo de esfuerzo diario y mensual",
        description:
          "Transforma una meta lejana de $30,000 en una cifra diaria concreta y accionable según los días restantes.",
      },
      {
        tag: "MOTIVACIÓN CLARA",
        title: "Barras de avance de alta precisión",
        description:
          "Visualiza el porcentaje completado, el capital acumulado y el saldo pendiente con tipografía tabular libre de distracciones.",
      },
    ],
    relatedBlogSlugs: [
      "fondo-de-emergencia",
      "como-ahorrar-dinero",
      "regla-50-30-20",
    ],
    faqs: [
      {
        category: "Metas de Ahorro",
        question: "¿Cuántas metas de ahorro puedo crear en Finance Pal?",
        answer:
          "No existe ningún límite artificial. Al almacenarse localmente en tu dispositivo, puedes crear tantas metas de ahorro a corto, mediano y largo plazo como necesites.",
      },
      {
        category: "Metas de Ahorro",
        question: "¿Cómo funciona el cálculo de ahorro diario necesario?",
        answer:
          "Cuando asignas una fecha objetivo a tu meta, Finance Pal divide el monto restante entre los días que faltan para esa fecha, mostrándote la cuota diaria exacta para cumplir tu objetivo sin estrés.",
      },
    ],
  },
  {
    slug: "control-de-deudas",
    code: "MOD-04",
    category: "Saneamiento de Pasivos",
    shortTitle: "Control de Deudas",
    title: "App para Controlar Deudas, Préstamos y Abonos Parciales",
    metaTitle: "App para Controlar Deudas y Préstamos Personales | Finance Pal",
    metaDescription:
      "Lleva el control exacto de lo que debes y lo que te deben. Registra abonos parciales, fechas de vencimiento y aplica el método bola de nieve o avalancha.",
    heroSubtitle:
      "Administra con claridad tanto tus pasivos pendientes como los préstamos que has otorgado a terceros, con historial de abonos y progreso de liquidación.",
    keywords: [
      "app para controlar deudas",
      "control de deudas y prestamos",
      "anotar quien me debe dinero",
      "app para salir de deudas",
      "metodo bola de nieve deudas",
      "registro de abonos",
    ],
    updatedAt: "2026-11-02",
    keyMetrics: [
      {
        label: "Doble Libro",
        value: "2 Vistas",
        detail: "Lo que debes (pasivos) y lo que te deben (cuentas por cobrar)",
      },
      {
        label: "Amortización",
        value: "Parcial",
        detail: "Seguimiento de cada abono hasta liquidar el 100%",
      },
      {
        label: "Estrategias",
        value: "2 Métodos",
        detail: "Ideal para Bola de Nieve o Avalancha",
      },
    ],
    problemStatement: {
      heading: "La incertidumbre sobre tus deudas genera más estrés que la deuda misma",
      paragraphs: [
        "Cuando tienes varios compromisos abiertos —una tarjeta de crédito, un préstamo familiar o dinero que prestaste a un amigo— llevar la cuenta de memoria o en notas sueltas provoca olvidos, cargos moratorios y malentendidos personales.",
        "El módulo de Deudas de Finance Pal separa con rigor contable las cuentas por pagar (lo que debes) de las cuentas por cobrar (lo que te deben), permitiéndote registrar abonos parciales y ver en tiempo real cuánto falta por liquidar.",
      ],
    },
    architectureSteps: [
      {
        step: "01",
        title: "Registra el compromiso o préstamo",
        description:
          "Indica la persona o institución, el monto total original, si es una deuda a favor o en contra y las notas de referencia.",
      },
      {
        step: "02",
        title: "Anota abonos parciales conforme ocurren",
        description:
          "Cada pago reduce automáticamente el saldo insoluto y actualiza el porcentaje de amortización en la barra de estado.",
      },
      {
        step: "03",
        title: "Ejecuta tu plan de liquidación acelerada",
        description:
          "Ordena tus pasivos de menor a mayor saldo (método bola de nieve) o por prioridad financiera (método avalancha) hasta marcar cada cuenta como saldada.",
      },
    ],
    highlights: [
      {
        tag: "CUENTAS POR COBRAR",
        title: "No vuelvas a olvidar un préstamo personal",
        description:
          "Lleva un registro transparente de quién te debe dinero, cuánto te ha abonado y qué saldo resta por recuperar.",
      },
      {
        tag: "PASIVOS BAJO CONTROL",
        title: "Visualización clara de tu desendeudamiento",
        description:
          "Observa cómo disminuye tu deuda total mes a mes conforme registras cada pago parcial.",
      },
      {
        tag: "CONFIDENCIALIDAD",
        title: "Cero reportes a burós ni terceros",
        description:
          "Tu inventario de pasivos es estrictamente privado y reside únicamente en tu dispositivo.",
      },
    ],
    relatedBlogSlugs: [
      "metodo-bola-de-nieve-vs-avalancha",
      "como-hacer-un-presupuesto-personal",
      "fondo-de-emergencia",
    ],
    faqs: [
      {
        category: "Control de Deudas",
        question: "¿Puedo registrar tanto lo que debo como lo que me deben otras personas?",
        answer:
          "Sí. El módulo distingue claramente entre obligaciones pendientes de pago (pasivos) y préstamos que tú hiciste a terceros (cuentas por cobrar).",
      },
      {
        category: "Control de Deudas",
        question: "¿Permite registrar pagos parciales o abonos a una deuda?",
        answer:
          "Por supuesto. Puedes abonar cualquier cantidad parcial y Finance Pal calculará de forma automática el saldo restante y el porcentaje pagado.",
      },
    ],
  },
  {
    slug: "privacidad-y-cifrado",
    code: "MOD-05",
    category: "Arquitectura Local-First",
    shortTitle: "Privacidad y Cifrado",
    title: "App de Finanzas Sin Conexión, Local-First y con Cifrado AES-GCM 256",
    metaTitle: "App de Finanzas Privada, Offline y Cifrada (AES-GCM 256) | Finance Pal",
    metaDescription:
      "Descubre la arquitectura Local-First de Finance Pal: sin servidores en la nube, código abierto MIT y respaldos cifrados con WebCrypto AES-GCM de 256 bits.",
    heroSubtitle:
      "Construida bajo el principio de soberanía de datos: tu información financiera vive en tu dispositivo y tus copias de seguridad se cifran con estándares criptográficos de grado militar.",
    keywords: [
      "app de finanzas sin conexion",
      "app de finanzas offline",
      "app de finanzas privada",
      "finanzas personales local first",
      "app de finanzas codigo abierto",
      "cifrado aes gcm 256 finanzas",
    ],
    updatedAt: "2026-11-02",
    keyMetrics: [
      {
        label: "Cifrado de Respaldo",
        value: "AES-256",
        detail: "Estándar WebCrypto AES-GCM autenticado",
      },
      {
        label: "Derivación de Clave",
        value: "100,000",
        detail: "Iteraciones PBKDF2-SHA256 con sal aleatoria",
      },
      {
        label: "Telemetría Financiera",
        value: "0 Bytes",
        detail: "Ningún dato contable se envía a servidores",
      },
    ],
    problemStatement: {
      heading: "Tu patrimonio personal no debería ser el producto de una empresa de datos",
      paragraphs: [
        "La mayoría de las aplicaciones financieras «gratuitas» monetizan tus datos: exigen crear una cuenta en sus servidores, almacenan tu historial de ingresos y gastos en texto plano en la nube y comparten perfiles de consumo con redes publicitarias o brókers de crédito.",
        "Finance Pal adopta una postura radicalmente distinta: arquitectura 100% Local-First y código abierto bajo licencia MIT. No existe base de datos centralizada de usuarios financieros; la aplicación se ejecuta íntegra en tu teléfono Android o navegador web.",
      ],
    },
    architectureSteps: [
      {
        step: "01",
        title: "Persistencia local aislada en tu dispositivo",
        description:
          "Tus transacciones, metas y deudas se guardan directamente en el almacenamiento local del dispositivo, sin cuentas obligatorias ni inicios de sesión remotos.",
      },
      {
        step: "02",
        title: "Derivación de clave con PBKDF2 (100,000 rondas)",
        description:
          "Al exportar un respaldo cifrado, tu contraseña se transforma mediante 100,000 iteraciones de PBKDF2-SHA256 con una sal criptográfica única de 128 bits.",
      },
      {
        step: "03",
        title: "Cifrado autenticado WebCrypto AES-GCM de 256 bits",
        description:
          "El archivo resultante incluye vector de inicialización (IV) aleatorio y etiqueta de autenticación que impide cualquier alteración o lectura sin tu clave.",
      },
    ],
    highlights: [
      {
        tag: "WEBCRYPTO NATIVO",
        title: "Criptografía ejecutada por el motor nativo del sistema",
        description:
          "Utiliza la API estándar W3C WebCrypto sin depender de librerías criptográficas opacas de terceros.",
      },
      {
        tag: "AUDITABLE",
        title: "Código abierto público bajo licencia MIT",
        description:
          "Cualquier ingeniero o auditor de seguridad puede inspeccionar el repositorio oficial en GitHub línea por línea.",
      },
      {
        tag: "PORTABILIDAD",
        title: "Migración instantánea entre Android y Web PWA",
        description:
          "Lleva tu archivo de respaldo cifrado de tu teléfono a tu computadora sin pasar por nubes corporativas.",
      },
    ],
    relatedBlogSlugs: [
      "mejores-apps-de-finanzas-personales",
      "como-hacer-un-presupuesto-personal",
      "fondo-de-emergencia",
    ],
    faqs: [
      {
        category: "Privacidad y Cifrado",
        question: "¿Puede el creador de Finance Pal ver mis ingresos o mis gastos?",
        answer:
          "No, es técnicamente imposible. Tus registros financieros nunca salen de tu dispositivo ni pasan por ningún servidor nuestro.",
      },
      {
        category: "Privacidad y Cifrado",
        question: "¿Qué ocurre si olvido la contraseña de un archivo de respaldo cifrado?",
        answer:
          "Debido a que el cifrado AES-GCM de 256 bits es real y no tiene puertas traseras ni llaves maestras en ningún servidor, nadie puede desencriptar un respaldo sin la contraseña que tú definiste.",
      },
    ],
  },
];

export function getFeatureBySlug(slug: string): FeaturePageData | undefined {
  return FEATURES_DATA.find((f) => f.slug === slug);
}
