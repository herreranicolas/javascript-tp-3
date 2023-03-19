const num =  parseInt(prompt("Ingrese un número"))

if (num < 0 || num === null || isNaN(num)) {
  alert("Ingresa un número válido")
} else {
  const crearTablaDeMultiplicar = (num) => {
        document.write(`
    <table border="1" style="text-align: center;" cellpadding="10">
    <thead>
      <tr>
        <th>Multiplicador</th>
        <th>Resultado</th>
      </tr>
    </thead>
    <tbody>
      <tr>`);
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
      document.write(`<td>${multiplicador}</td>`)
      document.write(`<td>${multiplicador * num}</td>`)
      document.write("</tr>");
    }
    document.write(`
    </tbody>
  </table>
    `);
  }
  crearTablaDeMultiplicar(num);
}