const precios = {
    1: 18000,
    2: 35000,
    3: 86000
  };
  
  function mostrarOpciones() {
    return prompt(
      "Opciones de mensualidad:\n" +
      "1. 15 días - $18,000\n" +
      "2. 30 días - $35,000\n" +
      "3. 3 meses - $86,000\n\n" +
      "Elige una opción (1, 2 o 3):"
    );
  }
  
  function obtenerPrecio(opcion) {
    return precios[opcion] || null;
  }
  
  function solicitarOpcion() {
    let opcion = parseInt(mostrarOpciones(), 10);
    let precio = obtenerPrecio(opcion);
  
    if (precio !== null) {
      alert(`El costo de tu mensualidad es: $${precio}`);
    } else {
      alert("Opción no válida. Inténtalo de nuevo.");
      solicitarOpcion(); // Llamada recursiva si la opción no es válida
    }
  }
  
  solicitarOpcion();
  