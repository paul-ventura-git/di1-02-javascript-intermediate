// ==========================================
// EJEMPLO 1: Encontrar el índice del primer número mayor que 10
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const indiceMayorQueDiez = numeros.findIndex(function(numero) {
    return numero > 10;
});

console.log("Ejemplo 1:", indiceMayorQueDiez);
// 1 → El número 12 está en la posición 1



// ==========================================
// EJEMPLO 2: Encontrar el índice de un usuario por nombre
// ==========================================

const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 18 },
    { nombre: "Carlos", edad: 30 }
];

const indiceLuis = usuarios.findIndex(usuario => usuario.nombre === "Luis");

console.log("Ejemplo 2:", indiceLuis);
// 1 → Luis está en la posición 1 del arreglo



// ==========================================
// EJEMPLO 3: Encontrar el índice de la primera palabra con más de 6 letras
// ==========================================

const palabras = ["Sol", "Mar", "JavaScript", "API", "Programación"];

const indicePalabraLarga = palabras.findIndex(palabra => palabra.length > 6);

console.log("Ejemplo 3:", indicePalabraLarga);
// 2 → "JavaScript" es la primera palabra con más de 6 letras
