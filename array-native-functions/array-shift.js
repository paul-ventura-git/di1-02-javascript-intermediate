// ==========================================
// EJEMPLO 1: Eliminar el primer número de un arreglo
// ==========================================

const numeros = [5, 12, 8, 130];

const primerNumero = numeros.shift();

console.log("Ejemplo 1 - Elemento eliminado:", primerNumero);
// 5 → Es el primer elemento del arreglo

console.log("Ejemplo 1 - Arreglo actualizado:", numeros);
// [12, 8, 130]
// shift() elimina el primer elemento y modifica el arreglo original



// ==========================================
// EJEMPLO 2: Eliminar el primer usuario de la lista
// ==========================================

const usuarios = [
    { nombre: "Ana" },
    { nombre: "Luis" },
    { nombre: "Carlos" }
];

const usuarioEliminado = usuarios.shift();

console.log("Ejemplo 2 - Usuario eliminado:", usuarioEliminado);
// { nombre: "Ana" }

console.log("Ejemplo 2 - Arreglo actualizado:", usuarios);
// [{ nombre: "Luis" }, { nombre: "Carlos" }]
// shift() funciona con cualquier tipo de dato



// ==========================================
// EJEMPLO 3: Usar shift() en un arreglo vacío
// ==========================================

const frutas = [];

const resultado = frutas.shift();

console.log("Ejemplo 3:", resultado);
// undefined → Si el arreglo está vacío, devuelve undefined
