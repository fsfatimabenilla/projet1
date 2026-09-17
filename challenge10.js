const prompt = require('prompt-sync')();
const r = Number(prompt('Saisire le rayuon de sphére :'));
const pi = 3.14;
const v = (4/3) * pi * r**3
console.log(` le volume de ce  sphère est : ${v}`);