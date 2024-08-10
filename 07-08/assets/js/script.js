/*
function sumar(num1, num2) {
  let resultado = num1 + num2

  return resultado;
}

//Llamar a la función
let respuesta = sumar(-43, 11);
console.log(respuesta);
console.log(sumar(-43, 11));

console.log("");

// Función que reciba dos números y retorne la resta de los mismo
function restar(num1, num2) {
  let resultado = num1 - num2;

  return resultado;
}


// Llamamos a la función
let respuestaResta = sumar(-78, 156);
console.log(respuestaResta);

console.log("");

//Funciones para multiplicar y dividir

//Multiplicar
function multiplicar(num1, num2) {
  let resultado = num1 * num2;

  return resultado;
}

let respuestaMultiplicar = sumar(9, 5);
console.log(respuestaMultiplicar);

console.log("");

//Dividir
function dividir(num1, num2) {
  let resultado = num1 / num2;

  return resultado;
}

let respuestaDividir = sumar(25, 5);
console.log(respuestaDividir);

console.log("");
*/

//Arow function significa función de flecha
let sumar = (num1, num2) => num1 + num2

//Llamar a la función
let respuesta = sumar(-43, 11);
console.log(respuesta);

console.log("")

//Restar
let restar = (num1, num2) => {
  let resultado = num1 - num2;

  return resultado;
};

//Llamamos a la función
let respuestaResta = restar(30, 15);
console.log(respuestaResta);

console.log("");

// Funciones para multiplicar y dividir en arrow function

// Divición:
let div = (num1, num2) => {
  if (num2 != 0) {
    let respuestaDiv = num1 / num2
    return respuestaDiv;
  } else {
    "No se puede dividir por 0";
  }
}
let respuestaDiv = div(10, 0);
console.log(respuestaDiv);
console.log("");

//Multiplicación
