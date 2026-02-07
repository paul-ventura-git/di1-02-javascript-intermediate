// ==========================================
// EJEMPLO 1: Comparar dos palabras alfabéticamente
// ==========================================

const palabra1 = "Ana";
const palabra2 = "Carlos";

const resultado = palabra1.localeCompare(palabra2);

console.log("Ejemplo 1:", resultado);
// -1 → "Ana" va antes que "Carlos"
// localeCompare() devuelve:
// -1 si va antes
//  1 si va después
//  0 si son iguales



// ==========================================
// EJEMPLO 2: Ordenar un arreglo de strings
// ==========================================

const nombres = ["Carlos", "Ana", "Luis"];

nombres.sort((a, b) => a.localeCompare(b));

console.log("Ejemplo 2:", nombres);
// ["Ana", "Carlos", "Luis"]
// localeCompare() es útil para ordenar texto correctamente



// ==========================================
// EJEMPLO 3: Comparar considerando configuración regional (acentos)
// ==========================================

const palabraA = "árbol";
const palabraB = "avion";

const comparacion = palabraA.localeCompare(palabraB, "es", {
    sensitivity: "base"
});

console.log("Ejemplo 3:", comparacion);
// Resultado según reglas del español
// El segundo parámetro indica el idioma
// sensitivity: "base" ignora mayúsculas y acentos
