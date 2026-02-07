// ==========================================
// EJEMPLO 1: Verificar si una cadena contiene una palabra
// ==========================================

const frase = "Aprendiendo JavaScript paso a paso";

const contieneJS = frase.includes("JavaScript");

console.log("Ejemplo 1:", contieneJS);
// true → La cadena contiene la palabra "JavaScript"
// includes() devuelve true o false



// ==========================================
// EJEMPLO 2: Verificar si existe una letra específica
// ==========================================

const palabra = "Programación";

const contieneLetraZ = palabra.includes("z");

console.log("Ejemplo 2:", contieneLetraZ);
// false → La palabra no contiene la letra "z"



// ==========================================
// EJEMPLO 3: Usar el segundo parámetro (posición inicial)
// ==========================================

const mensaje = "Hola mundo, hola universo";

const contieneHolaDesdePos6 = mensaje.includes("hola", 6);

console.log("Ejemplo 3:", contieneHolaDesdePos6);
// true → Empieza a buscar desde el índice 6
// El segundo parámetro indica desde qué posición comenzar la búsqueda
