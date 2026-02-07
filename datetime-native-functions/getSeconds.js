// ==========================================
// EJEMPLO 1: Obtener los segundos actuales
// ==========================================

const ahora = new Date();

const segundosActuales = ahora.getSeconds();

console.log("Ejemplo 1:", segundosActuales);
// Devuelve los segundos (0 - 59) de la hora actual
// Útil para mostrar la hora completa



// ==========================================
// EJEMPLO 2: Obtener los segundos de una fecha específica
// ==========================================

const fechaEspecifica = new Date("2026-02-07T15:45:30");

const segundos = fechaEspecifica.getSeconds();

console.log("Ejemplo 2:", segundos);
// 30 → Extrae los segundos de la fecha indicada



// ==========================================
// EJEMPLO 3: Verificar si es el inicio de un minuto exacto
// ==========================================

const ahora2 = new Date();

const inicioMinuto = ahora2.getSeconds() === 0;

console.log("Ejemplo 3:", inicioMinuto);
// true o false → Indica si los segundos actuales son 0
// Útil para acciones que deben ejecutarse al inicio de un minuto
