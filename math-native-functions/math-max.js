// ==========================================
// EJEMPLO 1: Obtener el número mayor entre varios valores
// ==========================================

const resultado = Math.max(5, 12, 8, 130, 44);

console.log("Ejemplo 1:", resultado);
// 130 → Math.max() devuelve el valor más grande
// Puede recibir múltiples argumentos



// ==========================================
// EJEMPLO 2: Obtener el número mayor dentro de un arreglo
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const mayor = Math.max(...numeros);
// Se usa el operador spread (...) para expandir el arreglo

console.log("Ejemplo 2:", mayor);
// 130 → Es el valor más grande del arreglo



// ==========================================
// EJEMPLO 3: Comparar números negativos y decimales
// ==========================================

const valorMaximo = Math.max(-10, -3.5, -20, 0.5);

console.log("Ejemplo 3:", valorMaximo);
// 0.5 → Funciona con números negativos y decimales
