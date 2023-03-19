const ladoA = parseInt(
  prompt("Ingrese el valor de uno de los lados del rectangulo")
);
const ladoB = parseInt(
  prompt("Ingrese el valor de otro de los lados del rectangulo")
);

if (
  (ladoA && ladoB) < 0 ||
  (ladoA && ladoB) === null ||
  (isNaN(ladoA) && isNaN(ladoB))
) {
  alert("Debes ingresar número válidos. Actualiza para correr el programa nuevamente.");
} else {
  const calcularPerimetro = (ladoA, ladoB) => {
    document.write(`El perimetro del rectangulo es de ${2 * (ladoA + ladoB)}`);
  };

  calcularPerimetro(ladoA, ladoB);
}
