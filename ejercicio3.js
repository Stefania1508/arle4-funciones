let escogerTipo = 1
let cantidadLavadoras = 3
let horas = 5

function calcularValorTipo(tipo) {
    if (tipo == 1) {
        return 3000;
    } else {
        return 4000;
    }
}

function calcularDescuento(cantidad) {
    if (cantidad > 3) {
        return 0.03;
    } else {
        return 0;
    }
}

function calcularHorasCosto(tipo, cantidad, horas) {
    let costoPorHora = calcularValorTipo(tipo);
    let costoBase = horas * cantidad * costoPorHora;
    let descuento = costoBase * calcularDescuento(cantidad);
    return costoBase - descuento;
}

let costoTotal = calcularHorasCosto(escogerTipo, cantidadLavadoras, horas);
console.log(`Costo total por alquilar ${cantidadLavadoras} lavadoras tipo ${escogerTipo} por ${horas} horas: $${costoTotal.toFixed(2)}.`);

