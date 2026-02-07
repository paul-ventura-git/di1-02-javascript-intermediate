// ==========================================
// EJEMPLO 1: Obtener el timestamp de la fecha actual
// ==========================================

const ahora = new Date();

const timestamp = ahora.valueOf();

console.log("Ejemplo 1:", timestamp);
// Devuelve la cantidad de milisegundos desde 1970-01-01 (Unix Epoch)
// Igual que getTime(), útil para cálculos de tiempo



// ==========================================
// EJEMPLO 2: Comparar dos fechas usando valueOf()
// ==========================================

const fecha1 = new Date("2026-02-07T10:00:00");
const fecha2 = new Date("2026-02-07T15:00:00");

const esMayor = fecha2.valueOf() > fecha1.valueOf();

console.log("Ejemplo 2:", esMayor);
// true → Permite comparar fechas en milisegundos fácilmente



// ==========================================
// EJEMPLO 3: Calcular la diferencia en días entre dos fechas
// ==========================================

const inicio = new Date("2026-01-01");
const fin = new Date("2026-01-31");

const diferenciaMs = fin.valueOf() - inicio.valueOf();
const diferenciaDias = diferenciaMs / (1000 * 60 * 60 * 24);

console.log("Ejemplo 3:", diferenciaDias);
// 30 → Convierte la diferencia de milisegundos a días
