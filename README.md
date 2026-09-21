# jsfranco.dev

Portafolio personal de Javier Franco, Full-Stack Developer: [jsfranco.dev](https://jsfranco.dev).

Sitio de una sola página con secciones de sobre mí, experiencia, skills y contacto, más una tarjeta de contacto digital en [`/card`](https://jsfranco.dev/card).

## Stack

- [Astro](https://astro.build) (sitio estático) y TypeScript
- Tailwind CSS 4
- Firebase: Firestore para guardar los mensajes del formulario de contacto y App Check (reCAPTCHA Enterprise) para proteger las escrituras
- Despliegue en Vercel

## Qué incluye

- **Español e inglés** con un selector de idioma. Los textos viven en `src/i18n/translations.ts` y se aplican en el navegador con atributos `data-i18n`.
- **Tema claro y oscuro**, con selector. El tema se aplica antes del primer render para evitar destellos.
- **Formulario de contacto real**: escribe en Firestore desde el navegador, con campo trampa (honeypot) contra bots simples, tiempo máximo de espera y mensajes de éxito o error.
- **Tarjeta digital** (`/card`): enlaces de contacto, código QR y descarga de un archivo vCard (`/contact.vcf`) para guardar el contacto en el teléfono.
- **Página 404** con el mismo estilo del sitio.
- Metadatos para redes y buscadores (Open Graph, Twitter Cards y JSON-LD).

## Diseño

Estilo suizo: tipografías Archivo e IBM Plex Mono, bordes de 2 px, mucho espacio en blanco y un único acento terracota. Los colores y el tema están definidos como variables en `src/styles/global.css`.

## Cómo correrlo

Requisitos: Node.js 22.12 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # sitio estático en dist/
npm run preview   # sirve el build localmente
```

### Variables de entorno

Copia `.env.example` a `.env` y completa los valores. Todas llevan el prefijo `PUBLIC_` porque se incluyen en el código del navegador: identifican el proyecto de Firebase y el sitio de reCAPTCHA, y no son secretos. La protección de los datos no depende de ocultarlas, sino de las reglas de Firestore y de App Check.

Sin esas variables el sitio se construye igual, pero el formulario de contacto no podrá enviar mensajes.

## Seguridad del formulario

- **Reglas de Firestore**: los visitantes solo pueden crear mensajes con campos y tamaños válidos; no pueden leer, editar ni borrar nada desde el navegador.
- **App Check**: cada escritura debe llevar un token verificado con reCAPTCHA Enterprise, así que un script que copie la configuración pública no puede escribir directamente.
- **Honeypot** en el formulario para descartar bots simples.

## Estructura

```text
src/
├── components/   secciones de la página (Hero, About, Experience, Skills, Contact) y controles
├── i18n/         traducciones ES / EN
├── layouts/      layout base: metadatos, tema, fuentes e idioma
├── lib/          cliente de Firebase (Firestore y App Check)
├── pages/        index, /card, /contact.vcf y 404
└── styles/       variables de diseño y animaciones
```

Todos los derechos reservados.
