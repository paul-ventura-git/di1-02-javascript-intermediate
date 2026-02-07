// ==========================================
// EJEMPLO 1: Agregar un número al final del arreglo
// ==========================================

const numeros = [5, 12, 8];

const nuevaLongitud = numeros.push(130);

console.log("Ejemplo 1 - Nueva longitud:", nuevaLongitud);
// 4 → push() devuelve la nueva longitud del arreglo

console.log("Ejemplo 1 - Arreglo actualizado:", numeros);
// [5, 12, 8, 130]
// push() agrega el elemento al final y modifica el arreglo original



// ==========================================
// EJEMPLO 2: Agregar varios elementos al mismo tiempo
// ==========================================

const frutas = ["Manzana", "Banana"];

const longitudActualizada = frutas.push("Mango", "Pera");

console.log("Ejemplo 2 - Nueva longitud:", longitudActualizada);
// 4

console.log("Ejemplo 2 - Arreglo actualizado:", frutas);
// ["Manzana", "Banana", "Mango", "Pera"]
// push() permite agregar múltiples elementos



// ==========================================
// EJEMPLO 3: Agregar un objeto a un arreglo
// ==========================================

const usuarios = [
    { nombre: "Ana" },
    { nombre: "Luis" }
];

usuarios.push({ nombre: "Carlos" });

console.log("Ejemplo 3 - Arreglo actualizado:", usuarios);
// [
//   { nombre: "Ana" },
//   { nombre: "Luis" },
//   { nombre: "Carlos" }
// ]
// push() funciona con cualquier tipo de dato
