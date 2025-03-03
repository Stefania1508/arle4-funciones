const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para verificar si el número es par o impar
function verificarNumero(numero) {
    if (isNaN(numero)) {
        console.log("Por favor, ingresa un número válido.");
    } else if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}

// Función principal que solicita el número al usuario
function solicitarNumero() {
    rl.question("Por favor, ingresa un número: ", (input) => {
        let numero = parseInt(input);
        verificarNumero(numero);
        rl.close(); // Cierra la interfaz de entrada
    });
}

// Llamada a la función principal
solicitarNumero();
