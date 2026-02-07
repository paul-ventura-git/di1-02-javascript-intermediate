// ==========================================
// EJEMPLO 1: Obtener el número menor entre varios valores
// ==========================================

const resultado = Math.min(5, 12, 8, 130, 44);

console.log("Ejemplo 1:", resultado);
// 5 → Math.min() devuelve el valor más pequeño
// Puede recibir múltiples argumentos



// ==========================================
// EJEMPLO 2: Obtener el número menor dentro de un arreglo
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const menor = Math.min(...numeros);
// Se usa el operador spread (...) para expandir el arreglo

console.log("Ejemplo 2:", menor);
// 5 → Es el valor más pequeño del arreglo



// ==========================================
// EJEMPLO 3: Comparar números negativos y decimales
// ==========================================

const valorMinimo = Math.min(-10, -3.5, -20, 0.5);

console.log("Ejemplo 3:", valorMinimo);
// -20 → Funciona con números negativos y decimales
