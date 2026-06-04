const fs = require('fs');
const required = ['index.html', 'style.css', 'script.js'];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`${file} missing`);
}
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');
for (const marker of ['id="hero"', 'id="categories"', 'id="posts"', 'id="newsletter"', 'newsletter-form', 'menu-toggle']) {
  if (!html.includes(marker)) throw new Error(`HTML marker missing: ${marker}`);
}
if (!css.includes('@media') || !css.includes('grid-template-columns')) throw new Error('Responsive/grid CSS missing');
if (!js.includes('addEventListener') || !js.includes('aria-expanded') || !js.includes('form.reset')) throw new Error('JS interactions missing');
console.log('Mini Blog landing checks passed');
