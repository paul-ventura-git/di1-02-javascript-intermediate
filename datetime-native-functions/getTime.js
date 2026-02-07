// ==========================================
// EJEMPLO 1: Obtener el timestamp actual en milisegundos
// ==========================================

const ahora = new Date();

const timestamp = ahora.getTime();

console.log("Ejemplo 1:", timestamp);
// Devuelve la cantidad de milisegundos desde 1970-01-01
// Útil para comparaciones o cálculos de tiempo



// ==========================================
// EJEMPLO 2: Calcular diferencia de tiempo entre dos fechas
// ==========================================

const inicio = new Date("2026-02-07T08:00:00");
const fin = new Date("2026-02-07T12:30:00");

const diferenciaMs = fin.getTime() - inicio.getTime();

console.log("Ejemplo 2:", diferenciaMs, "ms");
// 16200000 ms → Calcula la duración entre dos fechas en milisegundos



// ==========================================
// EJEMPLO 3: Comparar fechas para saber cuál es más reciente
// ==========================================

const fecha1 = new Date("2026-02-07T10:00:00");
const fecha2 = new Date("2026-02-07T15:00:00");

const masReciente = fecha1.getTime() > fecha2.getTime() ? fecha1 : fecha2;

console.log("Ejemplo 3:", masReciente);
// Devuelve la fecha más reciente comparando timestamps
