// ==========================================
// EJEMPLO 1: Eliminar espacios al inicio y al final
// ==========================================

const texto = "   Hola Mundo   ";

const resultado = texto.trim();

console.log("Ejemplo 1:", `"${resultado}"`);
// "Hola Mundo"
// trim() elimina espacios en blanco al inicio y al final
// No modifica la cadena original



// ==========================================
// EJEMPLO 2: Limpiar datos ingresados por el usuario
// ==========================================

const inputUsuario = "   admin   ";

const usuarioLimpio = inputUsuario.trim();

console.log("Ejemplo 2:", `"${usuarioLimpio}"`);
// "admin"
// Muy útil para validar formularios o credenciales



// ==========================================
// EJEMPLO 3: Espacios y saltos de línea
// ==========================================

const mensaje = "\n\t  JavaScript es genial  \t\n";

const mensajeLimpio = mensaje.trim();

console.log("Ejemplo 3:", `"${mensajeLimpio}"`);
// "JavaScript es genial"
// trim() también elimina tabulaciones y saltos de línea
