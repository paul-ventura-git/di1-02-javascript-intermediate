// ==========================================
// EJEMPLO 1: Convertir la fecha actual a ISO 8601
// ==========================================

const ahora = new Date();

const isoActual = ahora.toISOString();

console.log("Ejemplo 1:", isoActual);
// "2026-02-07T14:30:15.123Z"
// Devuelve la fecha en formato ISO 8601 (UTC)
// Útil para almacenamiento o APIs



// ==========================================
// EJEMPLO 2: Convertir una fecha específica a ISO
// ==========================================

const fechaEspecifica = new Date("2026-12-25T10:15:00");

const isoFecha = fechaEspecifica.toISOString();

console.log("Ejemplo 2:", isoFecha);
// "2026-12-25T10:15:00.000Z"
// El formato ISO incluye año, mes, día, hora, minutos, segundos y milisegundos



// ==========================================
// EJEMPLO 3: Comparar fechas usando ISO strings
// ==========================================

const fecha1 = new Date("2026-02-07T08:00:00");
const fecha2 = new Date("2026-02-07T12:00:00");

const iso1 = fecha1.toISOString();
const iso2 = fecha2.toISOString();

console.log("Ejemplo 3:", iso1 < iso2);
// true → Los strings ISO se pueden comparar lexicográficamente
// Útil para ordenamiento de fechas en formato ISO
