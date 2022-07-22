// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:

  return x>y?x:y;
}

export function mayoriaDeEdad(edad) {
  // Tu código:

  return edad >= 18 ? 'Allowed' : 'Not allowed';
}
  
export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  // Tu código:

  let estado = 'Offline';
  switch (status) {
    case 1:
      estado = 'Online'
      break;
    case 2:
      estado = 'Away'
      break;
    case 3:
      estado = 'Offline'
      break;
  }
  return estado;
}

export function saludo(idioma) {  
  // Tu código:
  let saludo = 'Hola!'

  switch (idioma) {
    case 'aleman':
      saludo = 'Guten Tag!'
      break;
    case 'ingles':
      saludo = 'Hello!'
      break;
    case 'mandarin':
      saludo = 'Ni Hao!'
      break;
  }
  return saludo;
}

export function colors(color) {  
  //Usar el statement Switch.
  // Tu código:
  let answer = 'Color not found'

  switch (color) {
    case 'blue':
      answer = `This is ${color}`
      break;
    case 'red':
      answer = `This is ${color}`
      break;
    case 'green':
      answer = `This is ${color}`
      break;
    case 'orange':
      answer = `This is ${color}`
      break;
  }
  return answer
}


export function esDiezOCinco(numero) {
  // Tu código:

  return;
}

export function estaEnRango(numero) {  
  // Tu código:

  return;
}

export function esEntero(numero) {
  // Tu código:

  return;
}

export function fizzBuzz(numero) {
  // Tu código:
 
  return;
}

export function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  // Tu código:
  
  return;
}

export function esPrimo(numero) {
  /// Tu código:

  return;  
}

export function esVerdadero(valor){
  // Tu código:

  return;
}

export function tablaDelSeis(){
  // Tu código:

  return;
}

export function tieneTresDigitos(numero){
  // Tu código:

  return ;  
}

export function doWhile(numero) {  
  //Usar el bucle do ... while.
  
  return;
}