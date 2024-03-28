/* 1- Resolver el problema utilizando javascript, para identificar una figura geométrica:

Teniendo una variable numérica que representa el número de lados de una figura geométrica, mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:

Círculo: si el número de lados es 0.
Triángulo: si el número de lados es 3.
Cuadrado: si el número de lados es 4.
Pentágono: si el número de lados es 5.
Hexágono: si el número de lados es 6.
Polígono: si el número de lados es mayor que 6.
Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero. */

let numeroLados = Math.floor(Math.random() * 20 + 1);

function tipoFigura(numeroLados) {
  if (numeroLados < 0) {
    return "Número de lados inválido.";
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
    return "Número de lados inválido.";
  }
}

let tipoFiguraGeometrica = tipoFigura(numeroLados);
console.log(tipoFiguraGeometrica);
