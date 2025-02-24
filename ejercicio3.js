// const prompt = require('prompt-sync')();

// let tipoLavadora, cantidad, horas;
// let tipoValido = false;

// while (!tipoValido) {
//     tipoLavadora = parseInt(prompt("Ingrese el tipo de lavadora (1 o 2): "));
//     if (tipoLavadora === 1 || tipoLavadora === 2) {
//         tipoValido = true;
//     } else {
//         console.log("Tipo de lavadora no válido.");
//     }
// }

// cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras: "));
// horas = parseInt(prompt("Ingrese la cantidad de horas: "));

// let costoPorHoras = tipoLavadora === 1 ? 4000 : 3000;

// const costoBase = cantidad * horas * costoPorHoras;
// const descuento = cantidad > 3 ? costoBase * 0.03 : 0;
// const costoTotal = costoBase - descuento;

// console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal.toFixed(2)}.`);
