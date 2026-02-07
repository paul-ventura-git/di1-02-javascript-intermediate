// ==========================================
// EJEMPLO 1: Obtener la hora actual
// ==========================================

const ahora = new Date();

const horaActual = ahora.getHours();

console.log("Ejemplo 1:", horaActual);
// Devuelve la hora en formato 24h (0 - 23)
// Útil para mostrar la hora actual



// ==========================================
// EJEMPLO 2: Obtener la hora de una fecha específica
// ==========================================

const fechaEspecifica = new Date("2026-02-07T15:45:00");

const hora = fechaEspecifica.getHours();

console.log("Ejemplo 2:", hora);
// 15 → Extrae la hora de la fecha indicada
// getHours() devuelve solo la hora, sin minutos ni segundos



// ==========================================
// EJEMPLO 3: Determinar si es horario laboral
// ==========================================

const ahora2 = new Date();

const hora2 = ahora2.getHours();

const esHorarioLaboral = hora2 >= 9 && hora2 <= 18;

console.log("Ejemplo 3:", esHorarioLaboral);
// true o false → Indica si la hora actual está entre 9:00 y 18:00
// Útil para condicionar acciones según la hora
