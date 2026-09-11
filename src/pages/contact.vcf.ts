import type { APIRoute } from 'astro';

const vcard = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Franco Ospina;Javier Steven;;;',
  'FN:Javier Steven Franco Ospina',
  'TITLE:Full-Stack Developer',
  'EMAIL;TYPE=INTERNET:javierfranco0904@gmail.com',
  'URL:https://jsfranco.dev',
  'URL:https://www.linkedin.com/in/jsfranco-dev',
  'URL:https://github.com/JSFranco96',
  'END:VCARD',
].join('\r\n');

export const GET: APIRoute = () =>
  new Response(vcard, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="javier-franco.vcf"',
    },
  });
