// ==========================================
// EJEMPLO 1: Eliminar el último número de un arreglo
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const ultimoNumero = numeros.pop();

console.log("Ejemplo 1 - Elemento eliminado:", ultimoNumero);
// 44 → Es el último elemento del arreglo

console.log("Ejemplo 1 - Arreglo actualizado:", numeros);
// [5, 12, 8, 130]
// pop() elimina el último elemento y modifica el arreglo original



// ==========================================
// EJEMPLO 2: Eliminar el último usuario de la lista
// ==========================================

const usuarios = [
    { nombre: "Ana" },
    { nombre: "Luis" },
    { nombre: "Carlos" }
];

const usuarioEliminado = usuarios.pop();

console.log("Ejemplo 2 - Usuario eliminado:", usuarioEliminado);
// { nombre: "Carlos" }

console.log("Ejemplo 2 - Arreglo actualizado:", usuarios);
// [{ nombre: "Ana" }, { nombre: "Luis" }]
// pop() también funciona con arreglos de objetos



// ==========================================
// EJEMPLO 3: Usar pop() en un arreglo vacío
// ==========================================

const frutas = [];

const resultado = frutas.pop();

console.log("Ejemplo 3:", resultado);
// undefined → Si el arreglo está vacío, devuelve undefined
