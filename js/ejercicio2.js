let ciudades = [];

do {
  let ciudad = prompt("Ingrese el nombre de una ciudad");

  if (ciudad === !"" || ciudad === !null || isNaN(ciudad)) {
    
    ciudad = ciudad.split(" ");

    for (let i = 0; i < ciudad.length; i++) {
      ciudad[i] = ciudad[i][0].toUpperCase() + ciudad[i].slice(1);
    }

    ciudad = ciudad.join(" ");

    ciudades.push(ciudad)
  } else {
    alert("Debes ingresar un nombre de una ciudad válido.");
  }
} while (confirm("¿Desea continuar ingresando nombres de ciudades?"));



if (ciudades.length > 0) {
  document.write("<h1>Ciudades</h1>");
  document.write("<ul>");
  ciudades.forEach((ciudad) => document.write(`<li>${ciudad}</li>`));
  document.write("</ul>");
  document.write(`<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`);
  document.write(
    ` <p>Los elementos en la primera, tercera y última posición son: </p>
  <ul>
    <li>${ciudades[0]}</li>
    <li>${
      ciudades[2] || "No se agregó un nombre de ciudad la tercer posición."
    }</li>
    <li>${ciudades[ciudades.length - 1]}</li>
  </ul>`
  );
  document.write("<p>Agrego el nombre de la ciudad París al final<p>")
  ciudades.push("París");
  document.write("<ul>");
  ciudades.forEach((ciudad) => document.write(`<li>${ciudad}</li>`));
  document.write("</ul>");
  document.write(
    `El elemento que ocupa la segunda posición es: ${ciudades[1]}`
  );
  document.write("<p>Modifico el elemento que ocupa la segunda posición por la ciudad Barcelona<p>");
  ciudades[1] = "Barcelona";
  document.write("<ul>");
  ciudades.forEach((ciudad) => document.write(`<li>${ciudad}</li>`));
  document.write("</ul>");
} else {
  document.write("<p>No se ingresaron nombres de ciudades</p>");
}

document.write("<hr>");
