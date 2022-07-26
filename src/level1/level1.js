
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
  // Tu código:
  return str.toString();  
}

export function suma(a, b) {
 // Tu código:
  return a + b;  
}

export function resta(a, b) {
 // Tu código:
  return a - b;
}

export function divide(a, b) { 
  // Tu código:
  return a / b;
}

export function multiplica(a, b) {
  // Tu código:
  return a * b;
}

export function sonIguales(a, b) {  
  // Tu código:
  return a === b;  
}

export function tienenMismaLongitud(str1, str2) {  
  // Tu código:

  return str1.length === str2.length;
}

export function menosQueNoventa(num) {  
  // Tu código:

  return num < 90;
}

export function mayorQueCincuenta(num) {  
  // Tu código:

  return num > 50;
}

export function obtenerResto(a, b) {  
  // Tu código:

  return a % b;
}

export function esPar(num) {
  // Tu código:

  return num % 2 === 0;
}

export function esImpar(num) {  
  // Tu código:

  return num % 2 !== 0;
}

export function elevarAlCuadrado(num) {  
  // Tu código:

  return num * num;
}

export function elevarAlCubo(num) { 
  // Tu código:

  return num * num * num;
}

export function elevar(num, exponent) {  
  // Tu código:
  let resultado = num;
  for (let i = 0; i < exponent - 1; i++) {
    resultado = resultado * num;
  }

  return resultado;
}

export function redondearNumero(num) {  
  // Tu código:

  return Math.round(num);
}

export function redondearHaciaArriba(num) { 
  // Tu código:

  return Math.ceil(num);
}

export function numeroRandom() {  
  // Tu código:

  return Math.random();
}

export function esPositivo(num) {
  // Tu código:
  if (num === 0) return false
  let resp = '';
  if (num > 0) {
    resp = "Es positivo"
  } else {
    resp= "Es negativo"
  } 
  return resp;
}

export function agregarSimboloExclamacion(str) {  
  // Tu código:

  return str + '!';
}

export function combinarNombres(firstName, lastName) {
  // Tu código:

  return firstName + ' ' + lastName;
}

export function obtenerSaludo(name) {
  // Tu código:

  return `Hola ${name}!`;
}

export function obtenerAreaRectangulo(alto, ancho) {  
  // Tu código:

  return alto * ancho;
}


export function retornarPerimetro(lado){
  // Tu código:

  return lado * 4;
}


export function areaDelTriangulo(base, altura){
  // Tu código:

  return base * altura / 2;
}


export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:

  return euro * 1.2;
}


export function esVocal(letra){
  // Tu código:
  if (letra.length > 1) return 'Dato incorrecto'

  let vocales = /[aeiou]/gi;

  return letra.match(vocales) ? 'Es vocal' : 'Dato incorrecto' ;
}
