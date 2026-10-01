export const translations = {
  es: {
    meta: {
      title: 'Javier Steven Franco Ospina — Full-Stack Developer',
      description:
        'Full-Stack Developer con +9 años de experiencia en Angular, Node.js, TypeScript, MongoDB y AWS. Construyendo aplicaciones web y móviles escalables.',
    },
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Skills',
      contact: 'Contacto',
      menuOpenLabel: 'Abrir menú',
      themeToggleLabel: 'Cambiar tema',
      langToggleLabel: 'Cambiar idioma',
    },
    hero: {
      eyebrow: 'Full-Stack Developer',
      tagline:
        'Más de 9 años construyendo aplicaciones web y móviles con Angular, Node.js, TypeScript y la nube. Hoy también ayudo a negocios locales a tener su web, un sistema como Odoo y la presencia digital que les trae clientes.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Hablemos',
      scroll: 'Scroll',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'De la idea al producto en producción',
      p1a: 'Soy Full-Stack Developer con más de ',
      p1b: '9 años de experiencia',
      p1c:
        ' construyendo aplicaciones web, móviles y basadas en la nube. He participado en proyectos que van desde sistemas de logística hasta plataformas de e-commerce personalizadas, trabajando principalmente con ',
      p1d: 'Angular, Node.js, TypeScript y AWS',
      p1e: '.',
      p2:
        'Me apasiona escribir código limpio y mantenible, y trabajar de cerca con equipos multidisciplinarios para entregar soluciones escalables centradas en el usuario. Mi experiencia incluye liderar pequeños equipos de desarrollo, mentoría a desarrolladores junior, y colaboración directa con stakeholders técnicos y no técnicos.',
      p3a: 'Actualmente estoy ampliando mi trabajo hacia ',
      p3b: 'negocios locales',
      p3c: ': sitios web, implementaciones de Odoo y marketing digital para que sus clientes los encuentren.',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Hitos que marcaron mi camino',
      items: [
        {
          period: 'Frontend & Cloud',
          title: 'Liderazgo en plataformas de e-commerce',
          description:
            'Lideré el desarrollo frontend de plataformas de e-commerce personalizadas, usando Angular junto a herramientas cloud como Firebase para construir experiencias de compra rápidas y confiables.',
        },
        {
          period: 'Modernización',
          title: 'Migración de proyectos Angular legados',
          description:
            'Modernicé proyectos Angular heredados, mejorando el rendimiento y la mantenibilidad del código mediante actualización de dependencias, refactors incrementales y mejores prácticas de arquitectura.',
        },
        {
          period: 'Liderazgo técnico',
          title: 'Gestión de proyectos end-to-end',
          description:
            'Supervisé proyectos de desarrollo de software de principio a fin, mentorizando desarrolladores junior e implementando procesos de code review para elevar la calidad del equipo.',
        },
        {
          period: 'Consultoría independiente',
          title: 'Desarrollo full-stack freelance',
          description:
            'Como profesional independiente en Radar Technologies & Consulting, desarrollé soluciones full-stack con C# para clientes remotos.',
        },
        {
          period: 'Primeros pasos',
          title: 'Sistemas de logística e inventarios',
          description:
            'En Unired desarrollé aplicaciones full-stack para logística, inventarios y ERP con KnockoutJS, C# y VB.Net, incluyendo la implementación de sistemas de escaneo en dispositivos Android.',
        },
      ],
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Trabajo reciente',
      intro:
        'Proyectos que construí de punta a punta. Cada uno tiene un caso de estudio con el problema, lo que hice y las decisiones detrás.',
      caseStudyCta: 'Ver caso de estudio',
      items: [
        {
          tag: 'Web + ERP · Comercio local',
          title: 'FerrosMuz',
          description:
            'Landing, tienda online y backoffice en Odoo para una ferretería familiar de Medellín, simplificados para que un equipo pequeño los opere sin capacitación pesada.',
          status: 'Piloto en curso',
        },
        {
          tag: 'App móvil · Offline-first',
          title: 'Ubicco',
          description:
            'App para ferias universitarias que funciona sin conexión: los estudiantes exploran instituciones, guardan favoritos, toman notas y ubican cada stand en el mapa.',
          status: 'En fase de pruebas',
        },
        {
          tag: 'Marca, web y marketing · Emprendimiento',
          title: 'Bella Glow Studio',
          description:
            'Identidad visual, landing y plan de marketing de 30 días para una cosmetóloga independiente en Medellín, construidos con el contenido real de su Instagram.',
          status: 'Borrador en revisión',
        },
      ],
    },
    caseStudies: {
      back: 'Volver a proyectos',
      roleLabel: 'Mi rol',
      statusLabel: 'Estado',
      stackLabel: 'Stack',
      linksLabel: 'Enlaces',
      teamLabel: 'Equipo',
      ctaTitle: '¿Tienes un proyecto parecido?',
      ctaText: 'Cuéntame qué necesitas y vemos juntos cómo resolverlo.',
      ctaButton: 'Hablemos',
      ferrosmuz: {
        meta: {
          title: 'FerrosMuz — Caso de estudio · Javier Franco',
          description:
            'Landing, tienda online y backoffice en Odoo 17 para una ferretería familiar de Medellín, simplificados para un equipo pequeño.',
        },
        tag: 'Web + ERP · Comercio local',
        title: 'FerrosMuz',
        summary:
          'Landing, tienda online y backoffice en Odoo para una ferretería familiar de Medellín, simplificados para que un equipo pequeño los opere sin capacitación pesada.',
        role: 'Desarrollo completo: landing, implementación de Odoo, módulos a medida y despliegue.',
        status: 'Piloto en curso con el equipo de la ferretería.',
        sections: [
          {
            heading: 'Contexto',
            body: [
              'FerrosMuz es una ferretería familiar en Medellín con seis rubros: herramientas, pinturas, plomería, electricidad, materiales de construcción y jardinería. Atiende en mostrador, por teléfono y por WhatsApp.',
              'Necesitaba presencia en internet, una tienda online y una forma ordenada de llevar ventas, inventario y compras.',
            ],
            bullets: [],
          },
          {
            heading: 'El reto',
            body: [
              'Odoo cubre todo eso, pero de entrada muestra decenas de menús, campos y opciones pensadas para empresas grandes: varias monedas, varias compañías, variantes, lotes. Para un equipo pequeño eso es ruido, y el ruido es una de las razones más comunes por las que un ERP termina abandonado.',
              'El objetivo no era instalar Odoo, sino que el equipo lo usara todos los días.',
            ],
            bullets: [],
          },
          {
            heading: 'Lo que construí',
            body: [],
            bullets: [
              'Landing en Astro con identidad visual propia, datos del negocio centralizados, botón de WhatsApp y formulario de contacto conectado a Firebase.',
              'Odoo 17 con Docker Compose, desplegado en Google Cloud detrás de Caddy con HTTPS automático, con ventas, punto de venta, inventario, compras, facturación y sitio web.',
              'Un módulo a medida con pantalla de inicio propia: indicadores del día (ventas, entregas pendientes, mercadería por recibir y stock bajo) y accesos directos a las tareas diarias.',
              'Tienda online con el mismo estilo visual del landing, mediante un segundo módulo de tema.',
              'Un manual de uso para el equipo, enlazado desde el propio backoffice.',
            ],
          },
          {
            heading: 'Decisiones',
            body: [],
            bullets: [
              'Apagar funciones, no solo esconder menús: desactivé las funciones avanzadas desde los grupos nativos de Odoo, lo que también limpia los formularios. Si algún día hacen falta, se reactivan desde Ajustes sin tocar código.',
              'Un solo rol, “Equipo”: el dueño y las encargadas operan ventas, caja, stock, compras y facturas, pero no los ajustes técnicos ni los permisos.',
              'Historial en los productos: nombre, precio, categoría y estado quedan registrados con quién y cuándo los cambió, para que varias personas editen el catálogo sin perder el rastro.',
              'Un script repetible para preparar el piloto: limpia los datos de demostración de Odoo sin borrar nada (cancela o archiva), distingue lo real de lo de ejemplo y crea los usuarios del equipo.',
            ],
          },
          {
            heading: 'Estado',
            body: [
              'El sistema está en piloto con el equipo de la ferretería. El landing y la tienda ya funcionan en su dominio propio, ferrosmuz.com, con HTTPS. El siguiente paso es medir con ellos qué tareas del día a día se volvieron más rápidas.',
            ],
            bullets: [],
          },
        ],
      },
      ubicco: {
        meta: {
          title: 'Ubicco — Caso de estudio · Javier Franco',
          description:
            'App móvil offline-first para ferias universitarias, construida con Ionic, Angular y Capacitor, con un pipeline propio para el mapa del evento.',
        },
        tag: 'App móvil · Offline-first',
        title: 'Ubicco',
        summary:
          'App móvil para ferias universitarias que funciona sin conexión: los estudiantes exploran instituciones, guardan favoritos, toman notas y ubican cada stand en el mapa del evento.',
        role: 'Desarrollé la app móvil, el pipeline del mapa y el landing, en un proyecto creado y liderado por Alison J. Méndez F..',
        status: 'En fase de pruebas, aún no publicada en las tiendas.',
        team: [
          'Product Designer. Creó la idea y lidera el producto, desde el diseño hasta el trabajo con las ferias.',
          'Backend y API',
          'App móvil, mapa y landing',
        ],
        sections: [
          {
            heading: 'Contexto',
            body: [
              'En una feria universitaria hay decenas de instituciones, charlas en paralelo y casi siempre mala señal. Los estudiantes salen con folletos sueltos y sin recordar qué les dijo cada universidad.',
              'La idea vino de Alison J. Méndez F., Product Designer, que la trajo al equipo y lidera el producto: desde el diseño hasta el trabajo con las ferias.',
            ],
            bullets: [],
          },
          {
            heading: 'El reto',
            body: [
              'La app tenía que funcionar justo donde la conexión falla: dentro del recinto, con cientos de personas en la misma red. Eso descartaba depender del servidor para buscar, ver el mapa o guardar notas.',
            ],
            bullets: [],
          },
          {
            heading: 'Lo que construí',
            body: [],
            bullets: [
              'App en Ionic, Angular y Capacitor para Android e iOS, en español e inglés, a partir de los diseños en Figma de Alison.',
              'Onboarding por nivel académico, área de estudio e idioma del programa, para mostrar primero las instituciones relevantes.',
              'Búsqueda y filtros rápidos, detalle de cada institución con sus programas, favoritos, notas y agenda de seminarios.',
              'Mapa interactivo del recinto que resalta el stand de cada institución.',
              'Integración con el API en Python del equipo (autenticación, favoritos y notas) y con Firebase para archivos y notificaciones push.',
              'Landing en Astro con política de privacidad y página de recuperación de contraseña.',
            ],
          },
          {
            heading: 'Decisiones',
            body: [],
            bullets: [
              'Offline-first con una sola descarga: los datos del evento llegan como un JSON y el mapa como un SVG, y ambos se guardan en el dispositivo. Buscar y navegar no necesitan red.',
              'Cola de sincronización: notas y favoritos se guardan primero en el teléfono y se envían al servidor cuando vuelve la conexión, con reintento si algo falla.',
              'Un pipeline propio para el mapa: el plano sale de Figma como un SVG genérico. Escribí un script en Python, sin dependencias externas, que detecta los stands, reemplaza los textos vectorizados por texto real, asigna el número de stand que usa la app e incrusta la bandera de cada país, para que el archivo final funcione sin conexión.',
              'Estado reactivo con Angular signals, para que el indicador de sincronización y los pendientes se actualicen solos.',
            ],
          },
          {
            heading: 'Estado',
            body: [
              'La app está en fase de pruebas y todavía no está publicada en las tiendas. El landing ya está en línea en ubicco.app.',
            ],
            bullets: [],
          },
        ],
      },
      bellaglow: {
        meta: {
          title: 'Bella Glow Studio — Caso de estudio · Javier Franco',
          description:
            'Identidad visual y landing para una cosmetóloga independiente en Medellín, con el contenido real de su Instagram.',
        },
        tag: 'Marca, web y marketing · Emprendimiento',
        title: 'Bella Glow Studio',
        summary:
          'Identidad visual, landing y plan de marketing para una cosmetóloga independiente en Medellín: del logo que ya usaba a un sistema de marca, una página para agendar por WhatsApp y un plan de 30 días para que la encuentren.',
        role: 'Proyecto pro bono: dirección de marca, diseño y desarrollo de la página, y plan de marketing digital.',
        status: 'Página publicada y en revisión con la cosmetóloga; el plan de 30 días arranca en octubre de 2026.',
        sections: [
          {
            heading: 'Contexto',
            body: [
              'Una cosmetóloga independiente en Medellín que ofrece tratamientos faciales, corporales, capilares y post-operatorios. Su negocio vivía en Instagram y WhatsApp: tenía un logo, publicaciones con sus servicios y clientas que le escribían directamente.',
              'Necesitaba una página propia que la presentara con profesionalismo y llevara a las personas a agendar.',
            ],
            bullets: [],
          },
          {
            heading: 'El reto',
            body: [
              'El logo era una imagen con mucho detalle: se veía bien en grande, pero se perdía como foto de perfil o favicon. Y la información de los servicios estaba repartida en publicaciones de Instagram, escrita sobre las imágenes.',
              'Además, no todo lo que se publica en redes debe ir en una página web: había que separar lo que conviene mostrar de lo que requiere confirmación.',
            ],
            bullets: [],
          },
          {
            heading: 'Lo que construí',
            body: [],
            bullets: [
              'Una vectorización fiel del logo a partir de la imagen original, y tres direcciones para simplificarlo.',
              'Un sistema de marca: logo completo para espacios grandes y monograma compacto para foto de perfil y favicon, con paleta, tipografías y componentes base.',
              'Una landing en Astro y Tailwind con servicios por categoría, presentación de la cosmetóloga, galería y agenda por WhatsApp con un mensaje ya escrito.',
              'Una imagen para compartir el enlace en WhatsApp y redes, y metadatos para buscadores.',
              'Datos estructurados (schema.org) para que Google entienda el negocio: tipo, dirección, contacto y catálogo de tratamientos.',
              'Una sección de testimonios lista para las reseñas reales, que aparece sola cuando se agrega la primera.',
              'Un plan de 30 días: perfil de Google Maps, WhatsApp Business con catálogo y respuestas rápidas, un calendario de 8 reels y la meta de 10 reseñas.',
            ],
          },
          {
            heading: 'Decisiones',
            body: [],
            bullets: [
              'Contenido real, nada inventado: los tratamientos, la frase de presentación y las fotos salen de su propio Instagram. Donde faltaba información, la página no la rellena.',
              'Cuidado con lo que se publica: dejé fuera los procedimientos con agujas o sueros hasta que ella confirme cuáles puede ofrecer, y solo usé fotos donde no se reconoce a ninguna clienta.',
              'WhatsApp primero: en lugar de una plataforma de reservas que todavía no usa, el botón abre el chat con el mensaje listo. La página funciona desde el primer día y la agenda en línea se puede sumar después.',
              'Fotos optimizadas al compilar: Astro las convierte a WebP en varios tamaños, para que la página cargue rápido con datos móviles aunque las originales sean pesadas.',
              'Un plan a su medida: está empezando como independiente y tiene poco tiempo, así que yo armo las herramientas y ella graba y publica. La grabación se concentra en un día y las publicaciones se programan.',
              'Nada de reseñas inventadas: los testimonios esperan a las clientas reales, y los datos para Google no incluyen reseñas propias, que Google ignora.',
              'Medir desde el día uno: el plan arranca con las cifras de hoy (seguidores, reseñas, consultas por WhatsApp) para comparar al día 30.',
            ],
          },
          {
            heading: 'Estado',
            body: [
              'La página está publicada en su dominio propio, bellaglowstudio.lat, y en revisión con ella; el plan de 30 días arranca en octubre de 2026. Al día 30 se miden las reseñas en Google, las consultas por WhatsApp y los seguidores, y con eso se decide qué sigue: agenda en línea o publicidad pagada.',
            ],
            bullets: [],
          },
        ],
      },
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Tecnologías con las que trabajo',
      secondaryLabel: 'También trabajo con',
      learningLabel: 'Ampliando mi trabajo hacia negocios locales',
      learning: {
        odoo: 'Odoo',
        localMarketing: 'Marketing digital para negocios locales',
      },
      learningTag: 'En aprendizaje',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Construyamos algo juntos',
      intro:
        '¿Tienes un proyecto en mente o una oportunidad para colaborar? Escríbeme, siempre estoy abierto a nuevas conversaciones.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      githubValue: 'JSFranco96',
      formNameLabel: 'Nombre',
      formNamePlaceholder: 'Tu nombre',
      formEmailLabel: 'Email',
      formEmailPlaceholder: 'tu@email.com',
      formMessageLabel: 'Mensaje',
      formMessagePlaceholder: 'Cuéntame sobre tu proyecto...',
      formSubmit: 'Enviar mensaje',
      formStatusSending: 'Enviando...',
      formStatusSuccess: '¡Gracias por escribir! Te responderé lo antes posible.',
      formStatusError: 'Algo salió mal enviando tu mensaje. Intenta de nuevo o escríbeme directo por email.',
    },
    card: {
      title: 'Javier Steven Franco Ospina',
      role: 'Full-Stack Developer',
      saveContact: 'Guardar contacto',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      webLabel: 'Web',
      qrCaption: 'Escanea para volver a esta tarjeta',
      backHome: 'Ir al sitio completo',
    },
    notFound: {
      eyebrow: 'Error 404',
      message: 'Esta página no existe o se movió de lugar.',
      backHome: 'Volver al inicio',
    },
  },
  en: {
    meta: {
      title: 'Javier Steven Franco Ospina — Full-Stack Developer',
      description:
        'Full-Stack Developer with 9+ years of experience in Angular, Node.js, TypeScript, MongoDB and AWS. Building scalable web and mobile applications.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      menuOpenLabel: 'Open menu',
      themeToggleLabel: 'Toggle theme',
      langToggleLabel: 'Switch language',
    },
    hero: {
      eyebrow: 'Full-Stack Developer',
      tagline:
        "Over 9 years building web and mobile applications with Angular, Node.js, TypeScript and the cloud. I also help local businesses get their website, a system like Odoo, and the online presence that brings in customers.",
      ctaProjects: 'View projects',
      ctaContact: "Let's talk",
      scroll: 'Scroll',
    },
    about: {
      eyebrow: 'About me',
      title: 'From idea to production-ready product',
      p1a: "I'm a Full-Stack Developer with over ",
      p1b: '9 years of experience',
      p1c:
        " building web, mobile and cloud-based applications. I've worked on projects ranging from logistics systems to custom e-commerce platforms, mainly using ",
      p1d: 'Angular, Node.js, TypeScript and AWS',
      p1e: '.',
      p2:
        "I'm passionate about writing clean, maintainable code and working closely with cross-functional teams to deliver scalable, user-centered solutions. My experience includes leading small development teams, mentoring junior developers, and collaborating directly with both technical and non-technical stakeholders.",
      p3a: "I'm currently expanding my work into ",
      p3b: 'local businesses',
      p3c: ': websites, Odoo implementations, and digital marketing that helps their customers find them.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Milestones along the way',
      items: [
        {
          period: 'Frontend & Cloud',
          title: 'Leading e-commerce platform development',
          description:
            'I led frontend development for custom e-commerce platforms, using Angular alongside cloud tools like Firebase to build fast, reliable shopping experiences.',
        },
        {
          period: 'Modernization',
          title: 'Migrating legacy Angular projects',
          description:
            'I modernized legacy Angular projects, improving performance and code maintainability through dependency upgrades, incremental refactors, and better architectural practices.',
        },
        {
          period: 'Technical leadership',
          title: 'End-to-end project management',
          description:
            "I oversaw software development projects end to end, mentoring junior developers and implementing code review processes to raise the team's overall quality.",
        },
        {
          period: 'Independent consulting',
          title: 'Freelance full-stack development',
          description:
            'As an independent professional at Radar Technologies & Consulting, I built full-stack solutions with C# for remote clients.',
        },
        {
          period: 'Early career',
          title: 'Logistics and inventory systems',
          description:
            'At Unired I built full-stack applications for logistics, inventory, and ERP systems with KnockoutJS, C#, and VB.Net, including implementing Android-based scanning systems.',
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Recent work',
      intro:
        'Projects I built end to end. Each one has a case study covering the problem, what I built, and the decisions behind it.',
      caseStudyCta: 'Read case study',
      items: [
        {
          tag: 'Web + ERP · Local business',
          title: 'FerrosMuz',
          description:
            'Landing page, online store, and Odoo back office for a family-owned hardware store in Medellín, simplified so a small team can run it without heavy training.',
          status: 'Pilot in progress',
        },
        {
          tag: 'Mobile app · Offline-first',
          title: 'Ubicco',
          description:
            'An app for university fairs that works offline: students browse institutions, save favorites, take notes, and find every booth on the venue map.',
          status: 'In testing',
        },
        {
          tag: 'Brand, web, and marketing · Small business',
          title: 'Bella Glow Studio',
          description:
            'Visual identity, landing page, and a 30-day marketing plan for an independent cosmetologist in Medellín, built from the real content of her Instagram.',
          status: 'Draft in review',
        },
      ],
    },
    caseStudies: {
      back: 'Back to projects',
      roleLabel: 'My role',
      statusLabel: 'Status',
      stackLabel: 'Stack',
      linksLabel: 'Links',
      teamLabel: 'Team',
      ctaTitle: 'Have a similar project?',
      ctaText: "Tell me what you need and we'll figure out how to solve it together.",
      ctaButton: "Let's talk",
      ferrosmuz: {
        meta: {
          title: 'FerrosMuz — Case study · Javier Franco',
          description:
            'Landing page, online store, and Odoo 17 back office for a family-owned hardware store in Medellín, simplified for a small team.',
        },
        tag: 'Web + ERP · Local business',
        title: 'FerrosMuz',
        summary:
          'Landing page, online store, and Odoo back office for a family-owned hardware store in Medellín, simplified so a small team can run it without heavy training.',
        role: 'Full delivery: landing page, Odoo implementation, custom modules, and deployment.',
        status: 'Pilot in progress with the store team.',
        sections: [
          {
            heading: 'Context',
            body: [
              'FerrosMuz is a family-owned hardware store in Medellín covering six categories: tools, paint, plumbing, electrical, building materials, and gardening. It serves customers at the counter, by phone, and over WhatsApp.',
              'It needed an online presence, an online store, and an organized way to track sales, inventory, and purchasing.',
            ],
            bullets: [],
          },
          {
            heading: 'The challenge',
            body: [
              "Odoo covers all of that, but out of the box it shows dozens of menus, fields, and options built for large companies: multiple currencies, multiple companies, variants, lots. For a small team that's noise, and noise is one of the most common reasons an ERP ends up abandoned.",
              'The goal wasn\'t to install Odoo. It was for the team to use it every day.',
            ],
            bullets: [],
          },
          {
            heading: 'What I built',
            body: [],
            bullets: [
              'An Astro landing page with its own visual identity, centralized business details, a WhatsApp button, and a contact form backed by Firebase.',
              'Odoo 17 on Docker Compose, deployed on Google Cloud behind Caddy with automatic HTTPS, with sales, point of sale, inventory, purchasing, invoicing, and website.',
              "A custom module with its own home screen: today's numbers (sales, pending deliveries, incoming stock, and low stock) and shortcuts to daily tasks.",
              'An online store that matches the landing page, through a second theme module.',
              'A user manual for the team, linked from the back office itself.',
            ],
          },
          {
            heading: 'Decisions',
            body: [],
            bullets: [
              "Turn features off, don't just hide menus: I disabled advanced features through Odoo's native groups, which also cleans up the forms. If they're ever needed, they can be turned back on from Settings without touching code.",
              'A single "Team" role: the owner and the managers run sales, the register, stock, purchasing, and invoices, but not technical settings or permissions.',
              'Change history on products: name, price, category, and status changes are logged with who made them and when, so several people can edit the catalog without losing track.',
              "A repeatable script to prepare the pilot: it clears Odoo's demo data without deleting anything (it cancels or archives), tells real records from sample ones, and creates the team's users.",
            ],
          },
          {
            heading: 'Status',
            body: [
              'The system is in a pilot with the store team. The landing page and the store are live on their own domain, ferrosmuz.com, over HTTPS. The next step is measuring with the team which daily tasks got faster.',
            ],
            bullets: [],
          },
        ],
      },
      ubicco: {
        meta: {
          title: 'Ubicco — Case study · Javier Franco',
          description:
            'An offline-first mobile app for university fairs, built with Ionic, Angular, and Capacitor, with a custom pipeline for the venue map.',
        },
        tag: 'Mobile app · Offline-first',
        title: 'Ubicco',
        summary:
          'A mobile app for university fairs that works offline: students browse institutions, save favorites, take notes, and find every booth on the venue map.',
        role: 'I built the mobile app, the map pipeline, and the landing page, on a project created and led by Alison J. Méndez F..',
        status: 'In testing, not yet published in the app stores.',
        team: [
          'Product Designer. Came up with the idea and leads the product, from design to working with the fairs.',
          'Backend and API',
          'Mobile app, map, and landing page',
        ],
        sections: [
          {
            heading: 'Context',
            body: [
              "A university fair has dozens of institutions, parallel talks, and almost always bad reception. Students leave with a pile of brochures and can't remember what each university told them.",
              'The idea came from Alison J. Méndez F., a Product Designer who brought it to the team and leads the product, from design to working with the fairs.',
            ],
            bullets: [],
          },
          {
            heading: 'The challenge',
            body: [
              'The app had to work exactly where connectivity fails: inside the venue, with hundreds of people on the same network. That ruled out depending on the server to search, view the map, or save notes.',
            ],
            bullets: [],
          },
          {
            heading: 'What I built',
            body: [],
            bullets: [
              "An Ionic, Angular, and Capacitor app for Android and iOS, in Spanish and English, built from Alison's Figma designs.",
              'Onboarding by academic level, field of study, and program language, so the most relevant institutions show up first.',
              'Quick search and filters, institution detail pages with their programs, favorites, notes, and a seminar schedule.',
              "An interactive venue map that highlights each institution's booth.",
              "Integration with the team's Python API (authentication, favorites, and notes) and with Firebase for files and push notifications.",
              'An Astro landing page with a privacy policy and a password recovery page.',
            ],
          },
          {
            heading: 'Decisions',
            body: [],
            bullets: [
              "Offline-first with a single download: event data arrives as one JSON file and the map as an SVG, and both are stored on the device. Searching and browsing don't need a network.",
              'A sync queue: notes and favorites are saved on the phone first and sent to the server when the connection comes back, with a retry if something fails.',
              "A custom map pipeline: the floor plan comes out of Figma as a generic SVG. I wrote a dependency-free Python script that detects the booths, replaces vectorized labels with real text, assigns the booth number the app uses, and embeds each country's flag, so the final file works offline.",
              'Reactive state with Angular signals, so the sync indicator and pending counts update on their own.',
            ],
          },
          {
            heading: 'Status',
            body: [
              "The app is in testing and isn't in the app stores yet. The landing page is live at ubicco.app.",
            ],
            bullets: [],
          },
        ],
      },
      bellaglow: {
        meta: {
          title: 'Bella Glow Studio — Case study · Javier Franco',
          description:
            'Visual identity and landing page for an independent cosmetologist in Medellín, built from the real content of her Instagram.',
        },
        tag: 'Brand, web, and marketing · Small business',
        title: 'Bella Glow Studio',
        summary:
          'Visual identity, landing page, and marketing plan for an independent cosmetologist in Medellín: from the logo she already had to a brand system, a page for booking over WhatsApp, and a 30-day plan to get her found.',
        role: 'Pro bono project: brand direction, design and development of the site, and a digital marketing plan.',
        status: 'Site live and in review with the cosmetologist; the 30-day plan starts in October 2026.',
        sections: [
          {
            heading: 'Context',
            body: [
              'An independent cosmetologist in Medellín offering facial, body, hair, and post-surgery treatments. Her business lived on Instagram and WhatsApp: she had a logo, posts describing her services, and clients who messaged her directly.',
              'She needed a site of her own that presented her professionally and led people to book.',
            ],
            bullets: [],
          },
          {
            heading: 'The challenge',
            body: [
              'The logo was a highly detailed image: it looked good large but got lost as a profile picture or favicon. And the service information was spread across Instagram posts, written on top of images.',
              "Also, not everything posted on social media belongs on a website: what's worth showing had to be separated from what needs confirming first.",
            ],
            bullets: [],
          },
          {
            heading: 'What I built',
            body: [],
            bullets: [
              'A faithful vectorization of the logo from the original image, plus three directions for simplifying it.',
              'A brand system: the full logo for large spaces and a compact monogram for profile pictures and the favicon, with a palette, typography, and base components.',
              'An Astro and Tailwind landing page with services by category, an introduction to the cosmetologist, a gallery, and booking over WhatsApp with a prefilled message.',
              'A share image for links on WhatsApp and social media, and search engine metadata.',
              "Structured data (schema.org) so Google understands the business: type, address, contact details, and treatment catalog.",
              'A testimonials section ready for real reviews, which appears on its own once the first one is added.',
              'A 30-day plan: a Google Maps profile, WhatsApp Business with a catalog and quick replies, a calendar of 8 reels, and a goal of 10 reviews.',
            ],
          },
          {
            heading: 'Decisions',
            body: [],
            bullets: [
              'Real content, nothing made up: the treatments, the intro quote, and the photos come from her own Instagram. Where information was missing, the page leaves it out.',
              'Care with what gets published: I left out procedures involving needles or IV drips until she confirms which ones she can offer, and only used photos where no client can be recognized.',
              "WhatsApp first: instead of a booking platform she doesn't use yet, the button opens the chat with the message ready. The page works from day one, and online booking can be added later.",
              'Photos optimized at build time: Astro converts them to WebP in several sizes, so the page loads fast on mobile data even though the originals are heavy.',
              "A plan that fits her: she's starting out on her own and has little time, so I set up the tools and she records and posts. Recording happens on a single day and posts are scheduled.",
              "No made-up reviews: testimonials wait for real clients, and the data for Google includes no self-published reviews, which Google ignores.",
              "Measure from day one: the plan starts with today's numbers (followers, reviews, WhatsApp inquiries) to compare on day 30.",
            ],
          },
          {
            heading: 'Status',
            body: [
              'The site is live on its own domain, bellaglowstudio.lat, and in review with her; the 30-day plan starts in October 2026. On day 30 we measure Google reviews, WhatsApp inquiries, and followers, and use that to decide what comes next: online booking or paid ads.',
            ],
            bullets: [],
          },
        ],
      },
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technologies I work with',
      secondaryLabel: 'Also working with',
      learningLabel: 'Expanding my work into local businesses',
      learning: {
        odoo: 'Odoo',
        localMarketing: 'Digital marketing for local businesses',
      },
      learningTag: 'Learning',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's build something together",
      intro:
        "Have a project in mind or an opportunity to collaborate? Reach out — I'm always open to new conversations.",
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      githubValue: 'JSFranco96',
      formNameLabel: 'Name',
      formNamePlaceholder: 'Your name',
      formEmailLabel: 'Email',
      formEmailPlaceholder: 'you@email.com',
      formMessageLabel: 'Message',
      formMessagePlaceholder: 'Tell me about your project...',
      formSubmit: 'Send message',
      formStatusSending: 'Sending...',
      formStatusSuccess: "Thanks for reaching out! I'll get back to you as soon as possible.",
      formStatusError: 'Something went wrong sending your message. Try again or email me directly.',
    },
    card: {
      title: 'Javier Steven Franco Ospina',
      role: 'Full-Stack Developer',
      saveContact: 'Save contact',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      webLabel: 'Web',
      qrCaption: 'Scan to come back to this card',
      backHome: 'Go to full site',
    },
    notFound: {
      eyebrow: 'Error 404',
      message: "This page doesn't exist or it moved somewhere else.",
      backHome: 'Back to home',
    },
  },
};

export type Lang = keyof typeof translations;
