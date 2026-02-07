// ==========================================
// EJEMPLO 1: Redondear un número decimal hacia abajo
// ==========================================

const numero = 4.9;

const resultado = Math.floor(numero);

console.log("Ejemplo 1:", resultado);
// 4 → Math.floor() redondea siempre hacia abajo
// Elimina la parte decimal



// ==========================================
// EJEMPLO 2: Obtener la parte entera de una división
// ==========================================

const total = 17;
const personas = 3;

const porPersona = Math.floor(total / personas);

console.log("Ejemplo 2:", porPersona);
// 5 → 17 / 3 = 5.66... → floor() devuelve 5
// Útil cuando solo se permiten valores enteros



// ==========================================
// EJEMPLO 3: Generar un número aleatorio entero (0 - 9)
// ==========================================

const numeroAleatorio = Math.floor(Math.random() * 10);

console.log("Ejemplo 3:", numeroAleatorio);
// Devuelve un número entero entre 0 y 9
// Math.random() genera un decimal entre 0 y 1
// floor() lo convierte en entero
