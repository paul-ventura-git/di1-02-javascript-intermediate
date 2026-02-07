// ==========================================
// EJEMPLO 1: Ordenar números de menor a mayor
// ==========================================

const numeros = [5, 12, 8, 130, 44];

numeros.sort(function(a, b) {
    return a - b; // Orden ascendente
});

console.log("Ejemplo 1:", numeros);
// [5, 8, 12, 44, 130]
// sort() modifica el arreglo original
// Es necesario usar función comparadora para ordenar números correctamente



// ==========================================
// EJEMPLO 2: Ordenar números de mayor a menor
// ==========================================

const numerosDesc = [5, 12, 8, 130, 44];

numerosDesc.sort((a, b) => b - a); // Orden descendente

console.log("Ejemplo 2:", numerosDesc);
// [130, 44, 12, 8, 5]



// ==========================================
// EJEMPLO 3: Ordenar objetos por una propiedad (edad)
// ==========================================

const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 18 },
    { nombre: "Carlos", edad: 30 }
];

usuarios.sort((a, b) => a.edad - b.edad);

console.log("Ejemplo 3:", usuarios);
// [
//   { nombre: "Luis", edad: 18 },
//   { nombre: "Ana", edad: 22 },
//   { nombre: "Carlos", edad: 30 }
// ]
// Se ordenan los objetos según la propiedad edad
