// ==========================================
// EJEMPLO 1: Obtener la diferencia de zona horaria local respecto a UTC
// ==========================================

const ahora = new Date();

const offsetMinutos = ahora.getTimezoneOffset();

console.log("Ejemplo 1:", offsetMinutos);
// Devuelve la diferencia en minutos respecto a UTC
// Ejemplo: -300 → UTC-5 horas



// ==========================================
// EJEMPLO 2: Convertir el offset a horas
// ==========================================

const offsetHoras = ahora.getTimezoneOffset() / 60;

console.log("Ejemplo 2:", offsetHoras);
// -5 → Diferencia en horas
// Útil para mostrar o calcular horarios internacionales



// ==========================================
// EJEMPLO 3: Ajustar una fecha a UTC usando el offset
// ==========================================

const fechaLocal = new Date("2026-02-07T12:00:00");

const fechaUTC = new Date(fechaLocal.getTime() + fechaLocal.getTimezoneOffset() * 60000);

console.log("Ejemplo 3:", fechaUTC);
// Convierte la fecha local a UTC sumando el offset en milisegundos
// 60000 → 1 minuto en milisegundos
