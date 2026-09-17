const prompt = require('prompt-sync')();
const km = prompt('Saisire la  distance en kilomètres :');
const Yards = km * 1093.61
console.log(`la  distance en yards est : ${Yards}`);