// ==========================================
// EJEMPLO 1: Multiplicar todos los números por 2
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const numerosDuplicados = numeros.map(function(numero) {
    return numero * 2;
});

console.log("Ejemplo 1:", numerosDuplicados);
// [10, 24, 16, 260, 88]
// map() crea un nuevo arreglo transformando cada elemento



// ==========================================
// EJEMPLO 2: Obtener solo los nombres de los usuarios
// ==========================================

const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 18 },
    { nombre: "Carlos", edad: 30 }
];

const nombres = usuarios.map(usuario => usuario.nombre);

console.log("Ejemplo 2:", nombres);
// ["Ana", "Luis", "Carlos"]
// Se transforma un arreglo de objetos en un arreglo de strings



// ==========================================
// EJEMPLO 3: Convertir palabras a mayúsculas
// ==========================================

const palabras = ["hola", "mundo", "javascript"];

const palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());

console.log("Ejemplo 3:", palabrasMayusculas);
// ["HOLA", "MUNDO", "JAVASCRIPT"]
// Cada palabra fue transformada a mayúsculas
