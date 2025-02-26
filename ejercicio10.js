function obtenerCopias() {
    let input = prompt("Ingrese la cantidad que desea imprimir");
  
    let copias = Number(input);
    
    if (!Number.isInteger(copias) || copias <= 0) {
      alert("Ingrese un número válido mayor a 0.");
      return obtenerCopias(); // Llamada recursiva si el valor no es válido
    }
  
    return copias;
  }
  
  function calcularPrecioPorCopia(copias) {
    if (copias >= 1000) return 50;
    if (copias >= 750) return 80;
    if (copias >= 500) return 100;
    return 120;
  }
  
  function calcularCostoTotal() {
    const copias = obtenerCopias();
    const precioPorCopia = calcularPrecioPorCopia(copias);
    const total = copias * precioPorCopia;
  
    alert(`El precio por copia es: $${precioPorCopia} 
      \nEl precio total a pagar es: $${total}`);
  }
  
  calcularCostoTotal();
  