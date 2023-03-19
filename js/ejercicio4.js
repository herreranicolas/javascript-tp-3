const num = parseInt(prompt("Ingrese un número"));

if (num < 0 || num === null || isNaN(num)) {
  alert("Debes ingresar un número valido. Actualiza la página para volver a correr el programa.");
} else {
  const esPar = (num) =>
    num % 2 === 0
      ? document.write(`El número ${num} es par.`)
      : document.write(`El número ${num} no es par.`);
  esPar(num);
}
