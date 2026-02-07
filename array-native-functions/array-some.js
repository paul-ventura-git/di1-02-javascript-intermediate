// ==========================================
// EJEMPLO 1: Verificar si al menos un número es mayor que 100
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const existeMayorQueCien = numeros.some(function(numero) {
    return numero > 100;
});

console.log("Ejemplo 1:", existeMayorQueCien);
// true → 130 es mayor que 100
// some() devuelve true si al menos un elemento cumple la condición



// ==========================================
// EJEMPLO 2: Verificar si hay algún usuario menor de edad
// ==========================================

const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Carlos", edad: 30 }
];

const hayMenorDeEdad = usuarios.some(usuario => usuario.edad < 18);

console.log("Ejemplo 2:", hayMenorDeEdad);
// true → Luis tiene 17 años
// some() se detiene cuando encuentra el primer elemento que cumple la condición



// ==========================================
// EJEMPLO 3: Verificar si alguna palabra contiene la letra "z"
// ==========================================

const palabras = ["Sol", "Mar", "JavaScript", "API"];

const contieneZ = palabras.some(palabra => palabra.toLowerCase().includes("z"));

console.log("Ejemplo 3:", contieneZ);
// false → Ninguna palabra contiene la letra "z"
