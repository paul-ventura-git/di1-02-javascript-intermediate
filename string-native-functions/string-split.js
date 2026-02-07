// ==========================================
// EJEMPLO 1: Dividir una frase en palabras
// ==========================================

const frase = "Aprendiendo JavaScript paso a paso";

const palabras = frase.split(" ");

console.log("Ejemplo 1:", palabras);
// ["Aprendiendo", "JavaScript", "paso", "a", "paso"]
// split(separador) divide la cadena en un arreglo
// usando el separador indicado



// ==========================================
// EJEMPLO 2: Dividir una cadena por comas
// ==========================================

const datos = "Ana,Luis,Carlos,María";

const listaNombres = datos.split(",");

console.log("Ejemplo 2:", listaNombres);
// ["Ana", "Luis", "Carlos", "María"]
// Muy útil para procesar datos tipo CSV simple



// ==========================================
// EJEMPLO 3: Convertir una palabra en arreglo de letras
// ==========================================

const palabra = "Hola";

const letras = palabra.split("");

console.log("Ejemplo 3:", letras);
// ["H", "o", "l", "a"]
// Si se usa "" como separador, se divide carácter por carácter
