// Función para calcular la suma de las calificaciones
function calcularSuma(fisica, quimica, biologia, matematicas, informatica) {
    return fisica + quimica + biologia + matematicas + informatica;
}

// Función para calcular el porcentaje final
function calcularPorcentaje(sumaDeCalificaciones, totalPosible) {
    return (sumaDeCalificaciones / totalPosible) * 100;
}

// Función para determinar la calificación en base al porcentaje
function determinarCalificacion(porcentajeFinal) {
    if (porcentajeFinal >= 0 && porcentajeFinal <= 59.9) {
        return "mala";
    } else if (porcentajeFinal >= 60 && porcentajeFinal <= 80) {
        return "buena";
    } else if (porcentajeFinal > 80) {
        return "excelente";
    }
}

// Función principal
function calcularResultado(fisica, quimica, biologia, matematicas, informatica) {
    const suma = calcularSuma(fisica, quimica, biologia, matematicas, informatica);
    const porcentaje = calcularPorcentaje(suma, 50); // 50 es el total posible de puntos
    const calificacion = determinarCalificacion(porcentaje);

    console.log(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);
}

// Llamada a la función principal
calcularResultado(7, 6, 8, 9, 3);
