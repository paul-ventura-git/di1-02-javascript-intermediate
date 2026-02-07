// ==========================================
// EJEMPLO 1: Obtener la posición de una palabra en una cadena
// ==========================================

const frase = "Aprendiendo JavaScript paso a paso";

const posicionJS = frase.indexOf("JavaScript");

console.log("Ejemplo 1:", posicionJS);
// 12 → "JavaScript" empieza en la posición 12
// indexOf() devuelve la posición o -1 si no lo encuentra



// ==========================================
// EJEMPLO 2: Verificar si una letra existe en la cadena
// ==========================================

const palabra = "Programación";

const posicionZ = palabra.indexOf("z");

console.log("Ejemplo 2:", posicionZ);
// -1 → La letra "z" no existe en la cadena
// Cuando no encuentra coincidencia, devuelve -1



// ==========================================
// EJEMPLO 3: Usar el segundo parámetro (posición inicial)
// ==========================================

const mensaje = "Hola mundo, hola universo";

const posicionHola = mensaje.indexOf("hola", 6);

console.log("Ejemplo 3:", posicionHola);
// 12 → Empieza a buscar desde el índice 6
// El segundo parámetro indica desde qué posición comenzar la búsqueda
