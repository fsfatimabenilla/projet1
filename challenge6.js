const prompt = require('prompt-sync')();
const a = Number(prompt('Saisire a :'));
const b = Number(prompt('Saisire b :'));
const s = a +b ;
const su = a-b ;
const m = a*b ;
const div = a/b;
console.log(`la somme de a et b est :${s}`);
console.log(`la soustraction  de a et b est :${su}`);
console.log(`la multiplication de a et b est :${m}`);
console.log(`la division de a et b est :${div}`);

