function obtenerTamano() {
    let tamano = prompt("Tamaño del sándwich (pequeño/grande):");
  
    if (tamano === "grande") return 12000;
    if (tamano === "pequeño") return 6000;
  
    alert("Tamaño no válido. Intente de nuevo.");
    return obtenerTamano(); // Llamada recursiva para validar correctamente
  }
  
  function agregarIngrediente(ingrediente, costo) {
    let respuesta = prompt(`¿${ingrediente}? (si/no):`);
    return respuesta === "si" ? costo : 0;
  }
  
  function calcularTotal() {
    let total = obtenerTamano();
    total += agregarIngrediente("Tocineta", 3000);
    total += agregarIngrediente("Pavo", 3000);
    total += agregarIngrediente("Queso", 2500);
  
    alert(`Total a pagar: $${total}`);
  }
  
  calcularTotal();
  