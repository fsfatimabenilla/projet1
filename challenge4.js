const prompt = require('prompt-sync')();
const kmh = Number(prompt('Saisire la   vitesse en kilomètres par heure :'));
const ms = kmh * 0.27778
console.log(`la   vitesse en mètres par seconde est : ${ms}`);