function obtenerOperador() {
    let operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):");
  
    if (operador === "Tigo") return { cargoFijo: 45000, valorMinuto: 200, paqueteDatos: 12000 };
    if (operador === "Claro") return { cargoFijo: 30000, valorMinuto: 100, paqueteDatos: 18000 };
    if (operador === "Movistar") return { cargoFijo: 40000, valorMinuto: 250, paqueteDatos: 8000 };
  
    alert("Operador no válido. Intente de nuevo.");
    return obtenerOperador();
  }
  
  function obtenerMinutos() {
    let minutos = prompt("Minutos internacionales consumidos:");
  
    return minutos && minutos == Number(minutos) ? Number(minutos) : obtenerMinutos();
  }
  
  function calcularTotal() {
    let { cargoFijo, valorMinuto, paqueteDatos } = obtenerOperador();
    let minutos = obtenerMinutos();
    let total = cargoFijo + (minutos * valorMinuto) + paqueteDatos;
  
    alert(`Total a pagar: $${total}`);
  }
  
  calcularTotal();
  
