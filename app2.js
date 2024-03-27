/* 2- Mejorar el ejercicio anterior con manejo de errores:

Modifica la función tipoFigura para que, además de determinar el tipo de figura geométrica, verifique que el número de lados sea válido (mayor o igual a cero). Si el número de lados es menor a cero,  debe mostrar  un mensaje de error indicando que el número de lados no es correcto. */

let numeroLados = Math.floor(Math.random() * 20 + 1);

function tipoFigura(numeroLados) {
  if (numeroLados < 0) {   
    return "Número de lados inválido."; // Aquí indico que el número de lados menor a cero no es correcto
  } else if (numeroLados == 0) {
    return `La figura geométrica con ${numeroLados} lados es el Círculo.`;
  } else if (numeroLados == 3) {
    return `La figura geométrica con ${numeroLados} lados es el Triángulo.`;
  } else if (numeroLados == 4) {
    return `La figura geométrica con ${numeroLados} lados es el Cuadrado.`;
  } else if (numeroLados == 5) {
    return `La figura geométrica con ${numeroLados} lados es el Pentágono.`;
  } else if (numeroLados == 6) {
    return `La figura geométrica con ${numeroLados} lados es el Hexágono.`;
  } else if (numeroLados > 6) {
    return `La figura geométrica con ${numeroLados} lados es el Polígono.`;
  } else {
    return "Número de lados inválido."; // Aquí estaría contemplando que si ingresa una figura con 2 ó 3 lados el número de lados no es correcto por eso dice que es inválido
  }
}

let tipoFiguraGeometrica = tipoFiguraGeometrica(numeroLados);
console.log(tipoFiguraGeometrica);
