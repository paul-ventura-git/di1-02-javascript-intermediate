// ==========================================
// EJEMPLO 1: Agregar un número al inicio del arreglo
// ==========================================

const numeros = [12, 8, 130];

const nuevaLongitud = numeros.unshift(5);

console.log("Ejemplo 1 - Nueva longitud:", nuevaLongitud);
// 4 → unshift() devuelve la nueva longitud del arreglo

console.log("Ejemplo 1 - Arreglo actualizado:", numeros);
// [5, 12, 8, 130]
// unshift() agrega el elemento al inicio y modifica el arreglo original



// ==========================================
// EJEMPLO 2: Agregar varios elementos al inicio
// ==========================================

const frutas = ["Mango", "Pera"];

const longitudActualizada = frutas.unshift("Manzana", "Banana");

console.log("Ejemplo 2 - Nueva longitud:", longitudActualizada);
// 4

console.log("Ejemplo 2 - Arreglo actualizado:", frutas);
// ["Manzana", "Banana", "Mango", "Pera"]
// unshift() permite agregar múltiples elementos al inicio



// ==========================================
// EJEMPLO 3: Agregar un objeto a un arreglo
// ==========================================

const usuarios = [
    { nombre: "Luis" },
    { nombre: "Carlos" }
];

usuarios.unshift({ nombre: "Ana" });

console.log("Ejemplo 3 - Arreglo actualizado:", usuarios);
// [
//   { nombre: "Ana" },
//   { nombre: "Luis" },
//   { nombre: "Carlos" }
// ]
// unshift() funciona con cualquier tipo de dato
