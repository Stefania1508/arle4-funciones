let salario = 2000000
let horasTrabajadas = 3
let valorHora = 15000
let bonificacion = 40000 //si es mujer

function calcularValorHE(){
    return valorHora * horasTrabajadas
}

function calcularbonificacion(genero){
    if(genero==="masculino"){
        bonificacion=0
    }
    return bonificacion
}

function calcularValorPagar(genero){
    return calcularValorHE()+calcularbonificacion(genero)+salario
}

function mostrarMenu(){
    console.log("1.ver las horas 2.ver bonificacion 3.")
}

let opcion = 1
switch(opcion){
    case 1:{
        console.log("las horars extras son"+ calcularValorHE())
    break
    }
    case 2: console.log(calcularValorPagar("femenino"))

}
console.log(calcularValorPagar("femenino"))
