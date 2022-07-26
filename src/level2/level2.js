// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:

  return x > y ? x : y;
}

export function mayoriaDeEdad(edad) {
  // Tu código:

  return edad >= 18 ? "Allowed" : "Not allowed";
}

export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  // Tu código:

  let estado = "Offline";
  switch (status) {
    case 1:
      estado = "Online";
      break;
    case 2:
      estado = "Away";
      break;
    case 3:
      estado = "Offline";
      break;
  }
  return estado;
}

export function saludo(idioma) {
  // Tu código:
  let saludo = "Hola!";

  switch (idioma) {
    case "aleman":
      saludo = "Guten Tag!";
      break;
    case "ingles":
      saludo = "Hello!";
      break;
    case "mandarin":
      saludo = "Ni Hao!";
      break;
  }
  return saludo;
}

export function colors(color) {
  //Usar el statement Switch.
  // Tu código:
  let answer = "Color not found";

  switch (color) {
    case "blue":
      answer = `This is ${color}`;
      break;
    case "red":
      answer = `This is ${color}`;
      break;
    case "green":
      answer = `This is ${color}`;
      break;
    case "orange":
      answer = `This is ${color}`;
      break;
  }
  return answer;
}

export function esDiezOCinco(numero) {
  // Tu código:

  return numero === 10 || numero === 5;
}

export function estaEnRango(numero) {
  // Tu código:

  return numero > 20 && numero < 50;
}

export function esEntero(numero) {
  // Tu código:

  return Math.round(numero) === numero;
}

export function fizzBuzz(numero) {
  // Tu código:
  let resp = "";
  if (numero % 3 === 0) resp += "fizz";
  if (numero % 5 === 0) resp += "buzz";
  return resp ? resp : numero;
}

export function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  // Tu código:
  if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
  if (num1 === 0 || num2 === 0 || num3 === 0) return "Error";
  if (num1 > num2 && num1 > num3) return "Número 1 es mayor y positivo";
  if (num3 > num1 || num3 > num2) return num3 + 1;
  return false;
}

export function esPrimo(numero) {
  /// Tu código:
  let esPrimo = true;

  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      esPrimo = false;
      break;
    }
  }
  return numero > 1 && esPrimo;
}

export function esVerdadero(valor) {
  // Tu código:

  return valor ? 'Soy verdadero' : 'Soy falso';
}

export function tablaDelSeis() {
  // Tu código:
  let tabla = [];
  for (let i = 0; i < 11 ; i++) tabla.push(6 * i);
  return tabla;
}

export function tieneTresDigitos(numero) {
  // Tu código:

  return numero > 99 && numero < 1000;
}

export function doWhile(numero) {
  //Usar el bucle do ... while.
  let i = 0
  do {
    numero += 5
    i++
  } while (i < 8);
  return numero;
}
