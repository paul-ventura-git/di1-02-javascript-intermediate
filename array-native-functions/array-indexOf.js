// ==========================================
// EJEMPLO 1: Obtener la posición de un número en un arreglo
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const posicionDoce = numeros.indexOf(12);

console.log("Ejemplo 1:", posicionDoce);
// 1 → El número 12 está en la posición 1
// Si no lo encuentra, devuelve -1



// ==========================================
// EJEMPLO 2: Verificar si un elemento existe en el arreglo
// ==========================================

const frutas = ["Manzana", "Banana", "Mango"];

const posicionPera = frutas.indexOf("Pera");

console.log("Ejemplo 2:", posicionPera);
// -1 → "Pera" no existe en el arreglo
// indexOf() devuelve -1 cuando no encuentra el elemento



// ==========================================
// EJEMPLO 3: Buscar una palabra dentro de una cadena
// ==========================================

const mensaje = "Aprendiendo JavaScript paso a paso";

const posicionJavaScript = mensaje.indexOf("JavaScript");

console.log("Ejemplo 3:", posicionJavaScript);
// 12 → "JavaScript" empieza en la posición 12
// También devuelve -1 si la palabra no existe
