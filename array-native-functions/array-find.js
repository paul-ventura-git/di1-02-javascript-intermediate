// ==========================================
// EJEMPLO 1: Encontrar el primer número mayor que 10
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const primerMayorQueDiez = numeros.find(function(numero) {
    return numero > 10;
});

console.log("Ejemplo 1:", primerMayorQueDiez);
// 12 → Es el primer número mayor que 10



// ==========================================
// EJEMPLO 2: Encontrar un usuario por nombre
// ==========================================

const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 18 },
    { nombre: "Carlos", edad: 30 }
];

const usuarioLuis = usuarios.find(usuario => usuario.nombre === "Luis");

console.log("Ejemplo 2:", usuarioLuis);
// { nombre: "Luis", edad: 18 }
// Devuelve el primer usuario que cumple la condición



// ==========================================
// EJEMPLO 3: Encontrar la primera palabra con más de 6 letras
// ==========================================

const palabras = ["Sol", "Mar", "JavaScript", "API", "Programación"];

const primeraPalabraLarga = palabras.find(palabra => palabra.length > 6);

console.log("Ejemplo 3:", primeraPalabraLarga);
// "JavaScript"
// Devuelve la primera palabra con más de 6 letras
