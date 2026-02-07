// ==========================================
// EJEMPLO 1: Extraer una parte de una cadena
// ==========================================

const frase = "Aprendiendo JavaScript";

const resultado = frase.substring(12, 22);

console.log("Ejemplo 1:", resultado);
// "JavaScript"
// substring(inicio, fin) extrae desde el índice inicio
// hasta antes del índice fin (no lo incluye)
// No modifica la cadena original



// ==========================================
// EJEMPLO 2: Extraer desde una posición hasta el final
// ==========================================

const palabra = "Programación";

const subCadena = palabra.substring(3);

console.log("Ejemplo 2:", subCadena);
// "gramación"
// Si solo se indica el inicio, extrae hasta el final



// ==========================================
// EJEMPLO 3: Si inicio es mayor que fin, los intercambia
// ==========================================

const texto = "Hola Mundo";

const ejemploIntercambio = texto.substring(9, 5);

console.log("Ejemplo 3:", ejemploIntercambio);
// "undo"
// substring() intercambia automáticamente los valores
// si el índice inicial es mayor que el final
