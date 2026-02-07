// ==========================================
// EJEMPLO 1: Recorrer un arreglo de números e imprimirlos
// ==========================================

const numeros = [5, 12, 8, 130, 44];

numeros.forEach(function(numero) {
    console.log("Número:", numero);
});

// Imprime cada número del arreglo
// Nota: forEach() no retorna un nuevo arreglo



// ==========================================
// EJEMPLO 2: Recorrer usuarios y mostrar un mensaje personalizado
// ==========================================

const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 18 },
    { nombre: "Carlos", edad: 30 }
];

usuarios.forEach(usuario => {
    console.log(`Hola, soy ${usuario.nombre} y tengo ${usuario.edad} años.`);
});

// Ejecuta una acción por cada usuario del arreglo



// ==========================================
// EJEMPLO 3: Usar índice y arreglo dentro de forEach()
// ==========================================

const frutas = ["Manzana", "Banana", "Mango"];

frutas.forEach((fruta, indice, arreglo) => {
    console.log(`Índice: ${indice} | Fruta: ${fruta}`);
    console.log("Arreglo completo:", arreglo);
});

// Demuestra que forEach recibe:
// elemento actual, índice y el arreglo completo
