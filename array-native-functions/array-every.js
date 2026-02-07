// ==========================================
// EJEMPLO 1: Verificar si todos los números son mayores que 0
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const todosMayoresQueCero = numeros.every(function(numero) {
    return numero > 0;
});

console.log("Ejemplo 1:", todosMayoresQueCero); 
// true → Todos los números son mayores que 0



// ==========================================
// EJEMPLO 2: Verificar si todos los usuarios son mayores de edad
// ==========================================

const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 18 },
    { nombre: "Carlos", edad: 30 }
];

const todosMayoresDeEdad = usuarios.every(usuario => usuario.edad >= 18);

console.log("Ejemplo 2:", todosMayoresDeEdad);
// true → Todos los usuarios tienen 18 años o más



// ==========================================
// EJEMPLO 3: Verificar si todos los elementos son strings
// ==========================================

const datos = ["Hola", "Mundo", "JavaScript", 2025];

const todosSonStrings = datos.every(dato => typeof dato === "string");

console.log("Ejemplo 3:", todosSonStrings);
// false → 2025 no es string