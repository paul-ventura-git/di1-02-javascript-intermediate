// ==========================================
// EJEMPLO 1: Unir elementos con coma
// ==========================================

const frutas = ["Manzana", "Banana", "Mango"];

const resultado = frutas.join(", ");

console.log("Ejemplo 1:", resultado);
// "Manzana, Banana, Mango"
// join() une los elementos del arreglo en un solo string
// El separador se define como parámetro



// ==========================================
// EJEMPLO 2: Unir elementos con guión
// ==========================================

const palabras = ["2026", "02", "07"];

const fecha = palabras.join("-");

console.log("Ejemplo 2:", fecha);
// "2026-02-07"
// Útil para construir fechas o formatos personalizados



// ==========================================
// EJEMPLO 3: Unir sin separador
// ==========================================

const letras = ["H", "o", "l", "a"];

const palabra = letras.join("");

console.log("Ejemplo 3:", palabra);
// "Hola"
// Si se usa "" como separador, los elementos se concatenan directamente
