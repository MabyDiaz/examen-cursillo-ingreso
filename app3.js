/* 3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:

Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo de un lado,  calcule y retorne el perímetro de la misma. El perímetro de una figura geométrica se calcula sumando las longitudes de todos sus lados. Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio, donde π es una constante (aproximadamente 3.14159) y radio es el radio del círculo.
 (para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales) . */

let numeroLados = Math.floor(Math.random() * 20 + 1);
let lado = Math.random() * 10 + 1;
//console.log(lado);

function tipoFigura(numeroLados, lado) {
  let perimetro = 0;
  if (numeroLados < 0) {
    return "Número de lados inválido.";
  } else if (numeroLados == 0) {
    perimetro = (2 * Math.PI * lado).toFixed(4); // tomo el valor del lado como el valor del radio de la circunferencia
    return `La figura geométrica con ${numeroLados} lados es el Círculo y su perímetro es ${perimetro}.`;
  } else if (numeroLados == 3) {
    perimetro = (lado + lado + lado).toFixed(4);
    return `La figura geométrica con ${numeroLados} lados es el Triángulo y su perímetro es ${perimetro}.`;
  } else if (numeroLados == 4) {
    perimetro = (lado * 4).toFixed(4);
    return `La figura geométrica con ${numeroLados} lados es el Cuadrado y su perímetro es ${perimetro}.`;
  } else if (numeroLados == 5) {
    perimetro = (lado * 5).toFixed(4);
    return `La figura geométrica con ${numeroLados} lados es el Pentágono y su perímetro es ${perimetro}.`;
  } else if (numeroLados == 6) {
    perimetro = (lado * 6).toFixed(4);
    return `La figura geométrica con ${numeroLados} lados es el Hexágono y su perímetro es ${perimetro}.`;
  } else if (numeroLados > 6) {
    perimetro = (lado * numeroLados).toFixed(4);
    return `La figura geométrica con ${numeroLados} lados es el Polígono y su perímetro es ${perimetro}.`;
  } else {
    return "Número de lados inválido.";
  }
}

let tipoFiguraGeometrica = tipoFigura(numeroLados, lado);
console.log(tipoFiguraGeometrica);
