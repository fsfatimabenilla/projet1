const prompt = require('prompt-sync')();
const la = Number(prompt('Saisire la longueur  du rectangle :'));
const lo = Number(prompt('Saisire  et la largeur du rectangle :'));
const su = la * lo 
console.log(` la surface du rectangle est : ${su}`);