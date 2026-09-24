const colores=['rojo','verde','azul']
const color1=colores[0];
const color2=colores[1];
const color3=colores[2];

console.log(color1, color2, color3)

const [c1, c2, c3]=colores;
console.log(c1, c2, c3)
const [,,tc] = colores;
console.log(tc)

const numeros=[10, 20, 30, 40, 50];
const [primero, ...restantes]=numeros;
console.log(primero)
console.log(restantes)

let a=10;
let b=20;
[a,b]=[b,a]
console.log(a)
console.log(b)