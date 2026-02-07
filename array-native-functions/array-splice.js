// ==========================================
// EJEMPLO 1: Eliminar elementos desde una posición específica
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const elementosEliminados = numeros.splice(1, 2);
// (posición inicial, cantidad a eliminar)

console.log("Ejemplo 1 - Elementos eliminados:", elementosEliminados);
// [12, 8]

console.log("Ejemplo 1 - Arreglo actualizado:", numeros);
// [5, 130, 44]
// splice() modifica el arreglo original



// ==========================================
// EJEMPLO 2: Reemplazar elementos
// ==========================================

const frutas = ["Manzana", "Banana", "Mango"];

const reemplazados = frutas.splice(1, 1, "Pera");
// Desde índice 1 elimina 1 elemento y agrega "Pera"

console.log("Ejemplo 2 - Elementos reemplazados:", reemplazados);
// ["Banana"]

console.log("Ejemplo 2 - Arreglo actualizado:", frutas);
// ["Manzana", "Pera", "Mango"]



// ==========================================
// EJEMPLO 3: Agregar elementos sin eliminar
// ==========================================

const usuarios = [
    { nombre: "Ana" },
    { nombre: "Luis" }
];

usuarios.splice(1, 0, { nombre: "Carlos" });
// En índice 1 elimina 0 elementos y agrega uno nuevo

console.log("Ejemplo 3 - Arreglo actualizado:", usuarios);
// [
//   { nombre: "Ana" },
//   { nombre: "Carlos" },
//   { nombre: "Luis" }
// ]
// splice() permite eliminar, reemplazar o insertar elementos
