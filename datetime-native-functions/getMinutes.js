// ==========================================
// EJEMPLO 1: Obtener los minutos actuales
// ==========================================

const ahora = new Date();

const minutosActuales = ahora.getMinutes();

console.log("Ejemplo 1:", minutosActuales);
// Devuelve los minutos (0 - 59) de la hora actual
// Útil para mostrar la hora completa



// ==========================================
// EJEMPLO 2: Obtener los minutos de una fecha específica
// ==========================================

const fechaEspecifica = new Date("2026-02-07T15:45:30");

const minutos = fechaEspecifica.getMinutes();

console.log("Ejemplo 2:", minutos);
// 45 → Extrae los minutos de la fecha indicada



// ==========================================
// EJEMPLO 3: Verificar si estamos en los primeros 30 minutos de la hora
// ==========================================

const ahora2 = new Date();

const primeros30Minutos = ahora2.getMinutes() < 30;

console.log("Ejemplo 3:", primeros30Minutos);
// true o false → Indica si los minutos actuales son menores a 30
// Útil para condicionar acciones según la fracción de la hora
