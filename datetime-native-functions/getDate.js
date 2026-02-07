// ==========================================
// EJEMPLO 1: Obtener el día del mes actual
// ==========================================

const hoy = new Date();

const diaDelMes = hoy.getDate();

console.log("Ejemplo 1:", diaDelMes);
// Devuelve el día del mes (1 - 31)
// No confundir con getDay() (día de la semana)



// ==========================================
// EJEMPLO 2: Obtener el día de una fecha específica
// ==========================================

const fechaEspecifica = new Date("2026-12-25");

const dia = fechaEspecifica.getDate();

console.log("Ejemplo 2:", dia);
// 25 → Extrae el día del mes de la fecha indicada



// ==========================================
// EJEMPLO 3: Comparar si dos fechas son el mismo día del mes
// ==========================================

const fecha1 = new Date("2026-02-07");
const fecha2 = new Date("2026-03-07");

const mismoDia = fecha1.getDate() === fecha2.getDate();

console.log("Ejemplo 3:", mismoDia);
// true → Ambas fechas tienen el día 7
// Solo compara el día del mes, no mes ni año
