// ==========================================
// EJEMPLO 1: Obtener una porción de un arreglo
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const subArreglo = numeros.slice(1, 4);

console.log("Ejemplo 1:", subArreglo);
// [12, 8, 130]
// slice(inicio, fin) obtiene elementos desde el índice inicio
// hasta antes del índice fin (no lo incluye)
// NO modifica el arreglo original

console.log("Arreglo original:", numeros);
// [5, 12, 8, 130, 44]



// ==========================================
// EJEMPLO 2: Copiar completamente un arreglo
// ==========================================

const frutas = ["Manzana", "Banana", "Mango"];

const copiaFrutas = frutas.slice();

console.log("Ejemplo 2:", copiaFrutas);
// ["Manzana", "Banana", "Mango"]
// slice() sin parámetros crea una copia superficial (shallow copy)



// ==========================================
// EJEMPLO 3: Usar índices negativos
// ==========================================

const palabras = ["Sol", "Mar", "JavaScript", "API", "Programación"];

const ultimosDos = palabras.slice(-2);

console.log("Ejemplo 3:", ultimosDos);
// ["API", "Programación"]
// Un índice negativo cuenta desde el final del arreglo
