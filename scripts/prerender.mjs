// Inserta el HTML renderizado en el servidor dentro de dist/index.html,
// para que buscadores y redes sociales reciban la página completa sin ejecutar JS.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = path.join(root, 'dist/index.html');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = await readFile(htmlPath, 'utf8');

if (!template.includes('<!--app-->')) {
  throw new Error('No se encontró el marcador <!--app--> en dist/index.html');
}

await writeFile(htmlPath, template.replace('<!--app-->', render()));
await rm(ssrDir, { recursive: true, force: true });
console.log('Prerender listo: dist/index.html');
