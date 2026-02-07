// ==========================================
// EJEMPLO 1: Repetir una palabra varias veces
// ==========================================

const palabra = "Hola ";

const resultado = palabra.repeat(3);

console.log("Ejemplo 1:", resultado);
// "Hola Hola Hola "
// repeat(n) repite la cadena n veces
// Devuelve una nueva cadena (no modifica la original)



// ==========================================
// EJEMPLO 2: Crear una línea divisoria
// ==========================================

const linea = "-".repeat(20);

console.log("Ejemplo 2:", linea);
// "--------------------"
// Útil para generar separadores visuales



// ==========================================
// EJEMPLO 3: Generar una contraseña simple basada en patrón
// ==========================================

const patron = "abc";

const password = patron.repeat(4);

console.log("Ejemplo 3:", password);
// "abcabcabcabc"
// repeat() puede usarse para generar patrones repetitivos
