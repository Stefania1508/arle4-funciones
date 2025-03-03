
const readline = require("readline");

// Función para crear la interfaz de entrada/salida
function crearInterfaz() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

// Función para calcular la ayuda económica basada en género y edad
function calcularAyuda(genero, edad) {
    let ayuda = 0;

    if (genero.toLowerCase() === "femenino") {
        if (edad > 50) {
            ayuda = 120000;
        } else if (edad >= 30) {
            ayuda = 100000;
        }
    } else if (genero.toLowerCase() === "masculino") {
        ayuda = 40000;
    }

    return ayuda;
}

// Función para solicitar datos al usuario
function solicitarDatos() {
    const rl = crearInterfaz();

    rl.question("¿Eres masculino o femenino? ", (genero) => {
        rl.question("¿Cuántos años tienes? ", (edad) => {
            edad = Number(edad);
            const ayuda = calcularAyuda(genero, edad);
            console.log(`Te toca una ayuda de: $${ayuda}`);
            rl.close(); // Cierra la interfaz de entrada
        });
    });
}

// Inicia el programa
solicitarDatos();
