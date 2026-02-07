// ==========================================
// EJEMPLO 1: Obtener el día de la semana actual
// ==========================================

const hoy = new Date();

const diaSemana = hoy.getDay();

console.log("Ejemplo 1:", diaSemana);
// Devuelve un número del 0 al 6
// 0 = domingo, 1 = lunes, ..., 6 = sábado



// ==========================================
// EJEMPLO 2: Día de la semana de una fecha específica
// ==========================================

const fechaEspecifica = new Date("2026-12-25");

const dia = fechaEspecifica.getDay();

console.log("Ejemplo 2:", dia);
// 5 → El 25 de diciembre de 2026 es viernes
// getDay() devuelve solo el día de la semana, no el día del mes



// ==========================================
// EJEMPLO 3: Verificar si una fecha cae en fin de semana
// ==========================================

const fecha = new Date("2026-02-07");

const esFinDeSemana = fecha.getDay() === 0 || fecha.getDay() === 6;

console.log("Ejemplo 3:", esFinDeSemana);
// false → 7 de febrero de 2026 cae en sábado o domingo?
// Permite validar si la fecha es sábado (6) o domingo (0)
