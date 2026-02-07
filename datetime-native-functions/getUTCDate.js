// ==========================================
// EJEMPLO 1: Obtener el día del mes en horario UTC de la fecha actual
// ==========================================

const ahora = new Date();

const diaUTC = ahora.getUTCDate();

console.log("Ejemplo 1:", diaUTC);
// Devuelve el día del mes (1 - 31) según la hora UTC
// Útil cuando trabajas con fechas globales



// ==========================================
// EJEMPLO 2: Obtener el día del mes en UTC de una fecha específica
// ==========================================

const fechaEspecifica = new Date("2026-12-25T15:30:00Z");

const dia = fechaEspecifica.getUTCDate();

console.log("Ejemplo 2:", dia);
// 25 → Extrae el día del mes considerando la zona UTC
// Z indica que la fecha está en UTC



// ==========================================
// EJEMPLO 3: Comparar días UTC de dos fechas
// ==========================================

const fecha1 = new Date("2026-02-07T23:00:00-0500"); // Hora local UTC-5
const fecha2 = new Date("2026-02-08T02:00:00-0200"); // Hora local UTC-2

const mismoDiaUTC = fecha1.getUTCDate() === fecha2.getUTCDate();

console.log("Ejemplo 3:", mismoDiaUTC);
// false → Aunque las fechas locales son diferentes, se compara el día según UTC
