// ==========================================
// EJEMPLO 1: Filtrar números mayores que 10
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const mayoresQueDiez = numeros.filter(function(numero) {
    return numero > 10;
});

console.log("Ejemplo 1:", mayoresQueDiez);
// [12, 130, 44] → Solo los números mayores que 10



// ==========================================
// EJEMPLO 2: Filtrar usuarios activos
// ==========================================

const usuarios = [
    { nombre: "Ana", activo: true },
    { nombre: "Luis", activo: false },
    { nombre: "Carlos", activo: true }
];

const usuariosActivos = usuarios.filter(usuario => usuario.activo);

console.log("Ejemplo 2:", usuariosActivos);
// [{ nombre: "Ana", activo: true }, { nombre: "Carlos", activo: true }]
// Solo los usuarios que están activos



// ==========================================
// EJEMPLO 3: Filtrar palabras que tengan más de 5 letras
// ==========================================

const palabras = ["Hola", "JavaScript", "Sol", "Programación", "API"];

const palabrasLargas = palabras.filter(palabra => palabra.length > 5);

console.log("Ejemplo 3:", palabrasLargas);
// ["JavaScript", "Programación"]
// Solo las palabras con más de 5 letras
