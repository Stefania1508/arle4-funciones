  function obtenerAngulo(i) {
    let angulo = Number(prompt(`Ingrese el ángulo ${i}:`));
  
    if (angulo <= 0) { 
      alert("Ingresa un número válido mayor a 0.");
      return obtenerAngulo(i); // Llamada recursiva si el valor es inválido
    }
  
    return angulo;
  }
  
  function calcularSumaAngulos(n, suma = 0) {
    if (n === 0) return suma; // Caso base: si ya ingresamos los 3 ángulos, retornamos la suma
    
    return calcularSumaAngulos(n - 1, suma + obtenerAngulo(4 - n));
  }
  
  function verificarTriangulo() {
    const suma = calcularSumaAngulos(3);
    alert(suma === 180 ? "Los ángulos forman un triángulo válido." : "Los ángulos NO forman un triángulo.");
  }
  
  verificarTriangulo();
  
  