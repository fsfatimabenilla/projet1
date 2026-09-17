const prompt = require('prompt-sync')();
const n1 = Number(prompt('Saisire 1ére nombre :'));
const n2 = Number(prompt('Saisire 2éme nombre  :'));
const n3 = Number(prompt('Saisire 3éme nombre :'));
const moy = (n1*2+n2*3+n3*5)/10;
console.log(`le moyenne est : ${moy}`);