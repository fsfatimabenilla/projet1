const prompt = require('prompt-sync')();
const c = prompt('Saisire la température en Celsius :');
const k = c+273.15;
console.log(`la température en Kelvin est : ${k}`);