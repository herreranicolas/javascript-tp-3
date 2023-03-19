let texto = prompt("Ingrese un texto:");

if (texto === !"" || texto === !null || !isNaN(texto)) {
  alert("Debes ingresar un texto valído. Actualiza para correr el programa nuevamente.")
} else {
  const analizarString = (texto) => {
    if (texto === texto.toLowerCase()) {
      document.write(`El texto esta formado solo por minúsculas.`);
    } else if (texto === texto.toUpperCase()) {
      document.write(`El texto esta formado solo por mayúsculas.`);
    } else {
      document.write(`El texto esta formado solo por mayúsculas y minúsculas.`);
    }
  };

  analizarString(texto);

}

