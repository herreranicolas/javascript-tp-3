
let aparicionesDos = 0;
let aparicionesTres = 0;
let aparicionesCuatro = 0;
let aparicionesCinco = 0;
let aparicionesSeis = 0;
let aparicionesSiete = 0;
let aparicionesOcho = 0;
let aparicionesNueve = 0;
let aparicionesDiez = 0;
let aparicionesOnce = 0;
let aparicionesDoce = 0;

for (let i = 0; i < 50; i++) {
  let dadoUno = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let dadoDos = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let suma = dadoUno + dadoDos;
  switch (suma) {
    case 2:
      aparicionesDos++;
      break;
    case 3:
      aparicionesTres++;
      break;
    case 4:
      aparicionesCuatro++;
      break;
    case 5:
      aparicionesCinco++;
      break;
    case 6:
      aparicionesSeis++;
      break;
    case 7:
      aparicionesSiete++;
      break;
    case 8:
      aparicionesOcho++;
      break;
    case 9:
      aparicionesNueve++;
      break;
    case 10:
      aparicionesDiez++;
      break;
    case 11:
      aparicionesOnce++;
      break;
    case 12:
      aparicionesDoce++;
      break;

    default:
      document.write("El valor de la suma esta fuera del rango")
      break;
  }
}

document.write(`
  <table border="1" style="text-align: center;" cellpadding="10">
    <thead>
      <tr>
        <th>Suma🎲🎲</th>
        <th>Apariciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>${aparicionesDos}</td>
      </tr>
      <tr>
        <td>3</td>
        <td>${aparicionesTres}</td>
      </tr>
      <tr>
        <td>4</td>
        <td>${aparicionesCuatro}</td>
      </tr>
      <tr>
        <td>5</td>
        <td>${aparicionesCinco}</td>
      </tr>
      <tr>
        <td>6</td>
        <td>${aparicionesSeis}</td>
      </tr>
      <tr>
        <td>7</td>
        <td>${aparicionesSiete}</td>
      </tr>
      <tr>
        <td>8</td>
        <td>${aparicionesOcho}</td>
      </tr>
      <tr>
        <td>9</td>
        <td>${aparicionesNueve}</td>
      </tr>
      <tr>
        <td>10</td>
        <td>${aparicionesDiez}</td>
      </tr>
      <tr>
        <td>11</td>
        <td>${aparicionesOnce}</td>
      </tr>
      <tr>
        <td>12</td>
        <td>${aparicionesDoce}</td>
      </tr>
    </tbody>
  </table>
`);

