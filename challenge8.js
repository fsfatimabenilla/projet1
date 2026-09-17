const prompt = require('prompt-sync')();
const a = Number(prompt('Saisire a :'));
const b = Number(prompt('Saisire b :'));
const c = Number(prompt('Saisire c :'));
const mogen = (a * b * c)**(1/3);
console.log(`le Moyenne géométrique est : ${mogen}`);