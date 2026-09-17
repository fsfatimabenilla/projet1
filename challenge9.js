const prompt = require('prompt-sync')();
const x1 = Number(prompt('Saisire x1 :'));
const y1 = Number(prompt('Saisire y2  :'));
const z1 = Number(prompt('Saisire z1 :'));
const x2 = Number(prompt('Saisire x1 :'));
const y2 = Number(prompt('Saisire y2  :'));
const z2 = Number(prompt('Saisire z1 :'));
const ds = Math.sqrt(
    (x2-x1) ** 2 +
    (y2-y2) ** 2 +
    (z2-z1)
)
console.log(`le Moyenne géométrique est : ${ds}`);
