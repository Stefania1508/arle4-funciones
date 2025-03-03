function calcularSalario (horas){
if (horas <= 10){
    return horas * 33000;

} else {
    return  horas * 30000;

}
}
function mostraSalario(nombre, horas){
    const salario = calcularSalario (horas);
    console.log ("señor/a" + nombre +", el numero de horas es" + horas + "y su salario equivale a$" + salario);

}
 
//variables de jemplo
const nombre = "ximena garcia ";
const horas = 15;

//llamada a la funcion
mostraSalario(nombre,horas);
