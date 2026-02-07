// ==========================================
// EJEMPLO 1: Obtener el valor absoluto de un número negativo
// ==========================================

const numero = -25;

const valorAbsoluto = Math.abs(numero);

console.log("Ejemplo 1:", valorAbsoluto);
// 25 → Math.abs() convierte números negativos en positivos
// Si el número ya es positivo, lo devuelve igual



// ==========================================
// EJEMPLO 2: Calcular la distancia entre dos números
// ==========================================

const a = 10;
const b = 25;

const distancia = Math.abs(a - b);

console.log("Ejemplo 2:", distancia);
// 15 → La distancia siempre es positiva
// Muy útil en cálculos matemáticos



// ==========================================
// EJEMPLO 3: Usar Math.abs() con decimales
// ==========================================

const decimal = -3.75;

const resultado = Math.abs(decimal);

console.log("Ejemplo 3:", resultado);
// 3.75 → También funciona con números decimales
