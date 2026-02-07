// ==========================================
// EJEMPLO 1: Convertir una palabra a mayúsculas
// ==========================================

const palabra = "javascript";

const resultado = palabra.toUpperCase();

console.log("Ejemplo 1:", resultado);
// "JAVASCRIPT"
// toUpperCase() devuelve una nueva cadena en mayúsculas
// No modifica la cadena original



// ==========================================
// EJEMPLO 2: Normalizar texto para comparación
// ==========================================

const codigoIngresado = "abc123";
const codigoGuardado = "ABC123";

const sonIguales = codigoIngresado.toUpperCase() === codigoGuardado.toUpperCase();

console.log("Ejemplo 2:", sonIguales);
// true
// Útil para comparaciones sin sensibilidad a mayúsculas/minúsculas



// ==========================================
// EJEMPLO 3: Convertir una frase completa
// ==========================================

const frase = "Aprendiendo JavaScript paso a paso";

const fraseMayusculas = frase.toUpperCase();

console.log("Ejemplo 3:", fraseMayusculas);
// "APRENDIENDO JAVASCRIPT PASO A PASO"
// Convierte todos los caracteres alfabéticos a mayúsculas
