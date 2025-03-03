
function esParOImpar(numero5) {
    if (numero5 % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}


let numero5 = 6; 
console.log("El número " + numero5 + " es " + esParOImpar(numero5) + ".");