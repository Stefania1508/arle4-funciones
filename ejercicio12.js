const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

function obtenerModelo() {
  let modelo = prompt("Ingrese el número de modelo de su automóvil:");

  return modelo && !isNaN(modelo) ? Number(modelo) : obtenerModelo();
}

function verificarDefecto() {
  let modelo = obtenerModelo();

  alert(modelosDefectuosos.includes(modelo) 
    ? "El automóvil está defectuoso, llevar a garantía." 
    : "Su automóvil no está defectuoso."
  );
}

verificarDefecto();
