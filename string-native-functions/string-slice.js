// ==========================================
// EJEMPLO 1: Extraer una parte de una cadena
// ==========================================

const frase = "Aprendiendo JavaScript";

const resultado = frase.slice(12, 22);

console.log("Ejemplo 1:", resultado);
// "JavaScript"
// slice(inicio, fin) extrae desde el índice inicio
// hasta antes del índice fin (no lo incluye)
// No modifica la cadena original



// ==========================================
// EJEMPLO 2: Extraer desde una posición hasta el final
// ==========================================

const palabra = "Programación";

const subCadena = palabra.slice(3);

console.log("Ejemplo 2:", subCadena);
// "gramación"
// Si solo se indica el inicio, extrae hasta el final



// ==========================================
// EJEMPLO 3: Usar índices negativos
// ==========================================

const texto = "Hola Mundo";

const ultimosCinco = texto.slice(-5);

console.log("Ejemplo 3:", ultimosCinco);
// "Mundo"
// Un índice negativo cuenta desde el final de la cadena
