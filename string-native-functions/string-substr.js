// ==========================================
// EJEMPLO 1: Extraer una parte de una cadena indicando longitud
// ==========================================

const frase = "Aprendiendo JavaScript";

const resultado = frase.substr(12, 10);

console.log("Ejemplo 1:", resultado);
// "JavaScript"
// substr(inicio, longitud)
// Extrae desde el índice indicado la cantidad de caracteres especificada
// Nota: substr() está considerado método legacy (obsoleto en algunos entornos)



// ==========================================
// EJEMPLO 2: Extraer desde una posición hasta el final
// ==========================================

const palabra = "Programación";

const subCadena = palabra.substr(3);

console.log("Ejemplo 2:", subCadena);
// "gramación"
// Si no se indica longitud, extrae hasta el final



// ==========================================
// EJEMPLO 3: Usar índice negativo
// ==========================================

const texto = "Hola Mundo";

const ultimosCinco = texto.substr(-5);

console.log("Ejemplo 3:", ultimosCinco);
// "Mundo"
// Un índice negativo comienza desde el final de la cadena
