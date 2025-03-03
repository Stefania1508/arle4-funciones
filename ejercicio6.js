const readline = require("readline");

// Función para crear la interfaz de entrada/salida
function crearInterfaz() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

// Función para encontrar el número mayor
function encontrarMayor(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Función para solicitar un número al usuario
function solicitarNumero(mensaje, callback) {
    rl.question(mensaje, (input) => {
        callback(Number(input));
    });
}

// Función principal para gestionar la lógica
function iniciarPrograma() {
    const rl = crearInterfaz();
    
    solicitarNumero("Ingrese el primer número: ", (num1) => {
        solicitarNumero("Ingrese el segundo número: ", (num2) => {
            solicitarNumero("Ingrese el tercer número: ", (num3) => {
                const mayor = encontrarMayor(num1, num2, num3);
                console.log(`El número mayor es: ${mayor}`);
                rl.close();
            });
        });
    });
}

// Iniciar el programa
iniciarPrograma();
