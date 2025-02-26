alert("Diagnóstico de problemas en la computadora");

function preguntar(mensaje) {
  let respuesta = prompt(mensaje);
  return (respuesta === "si" || respuesta === "no") ? respuesta : preguntar(mensaje);
}

function diagnostico() {
  let pitido = preguntar("¿La computadora emite un pitido al iniciar? (si/no):");
  let disco = preguntar("¿El disco duro gira? (si/no):");

  let mensaje =
    pitido === "si" && disco === "si" ? "La computadora está averiada. Contacte con el técnico." :
    pitido === "si" && disco === "no" ? "Verifique contactos de la unidad." :
    pitido === "no" && disco === "no" ? "Lleve la computadora a la central para reparación." :
    "Compruebe las conexiones de altavoces.";

  alert(mensaje);
}

diagnostico();
