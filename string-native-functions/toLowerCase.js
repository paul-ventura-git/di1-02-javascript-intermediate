// ==========================================
// EJEMPLO 1: Convertir una palabra a minúsculas
// ==========================================

const palabra = "JAVASCRIPT";

const resultado = palabra.toLowerCase();

console.log("Ejemplo 1:", resultado);
// "javascript"
// toLowerCase() devuelve una nueva cadena en minúsculas
// No modifica la cadena original



// ==========================================
// EJEMPLO 2: Normalizar texto para comparación
// ==========================================

const usuarioInput = "Admin";
const usuarioGuardado = "admin";

const sonIguales = usuarioInput.toLowerCase() === usuarioGuardado.toLowerCase();

console.log("Ejemplo 2:", sonIguales);
// true
// Útil para comparaciones sin sensibilidad a mayúsculas/minúsculas



// ==========================================
// EJEMPLO 3: Convertir una frase completa
// ==========================================

const frase = "Aprendiendo JavaScript Paso A Paso";

const fraseMinusculas = frase.toLowerCase();

console.log("Ejemplo 3:", fraseMinusculas);
// "aprendiendo javascript paso a paso"
// Convierte todos los caracteres alfabéticos a minúsculas
