// ==========================================
// EJEMPLO 1: Obtener la última posición de una palabra
// ==========================================

const frase = "hola mundo hola universo";

const ultimaPosicionHola = frase.lastIndexOf("hola");

console.log("Ejemplo 1:", ultimaPosicionHola);
// 11 → Es la última aparición de "hola"
// lastIndexOf() busca desde el final hacia el inicio



// ==========================================
// EJEMPLO 2: Verificar si una letra aparece más de una vez
// ==========================================

const palabra = "programacion";

const ultimaPosicionO = palabra.lastIndexOf("o");

console.log("Ejemplo 2:", ultimaPosicionO);
// 9 → Es la última posición de la letra "o"
// Devuelve -1 si no encuentra coincidencias



// ==========================================
// EJEMPLO 3: Usar el segundo parámetro (posición inicial hacia atrás)
// ==========================================

const mensaje = "JavaScript es genial y JavaScript es popular";

const posicionDesde20 = mensaje.lastIndexOf("JavaScript", 20);

console.log("Ejemplo 3:", posicionDesde20);
// 0 → Busca hacia atrás empezando desde el índice 20
// El segundo parámetro indica desde qué índice comenzar la búsqueda inversa
