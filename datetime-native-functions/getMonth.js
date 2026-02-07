// ==========================================
// EJEMPLO 1: Obtener el mes actual
// ==========================================

const hoy = new Date();

const mesActual = hoy.getMonth();

console.log("Ejemplo 1:", mesActual);
// Devuelve el mes (0 - 11)
// 0 = enero, 1 = febrero, ..., 11 = diciembre



// ==========================================
// EJEMPLO 2: Obtener el mes de una fecha específica
// ==========================================

const fechaEspecifica = new Date("2026-12-25");

const mes = fechaEspecifica.getMonth();

console.log("Ejemplo 2:", mes);
// 11 → diciembre (recuerda que enero = 0)



// ==========================================
// EJEMPLO 3: Verificar si es temporada de vacaciones (julio o diciembre)
// ==========================================

const fecha = new Date("2026-07-15");

const esVacaciones = fecha.getMonth() === 6 || fecha.getMonth() === 11;

console.log("Ejemplo 3:", esVacaciones);
// true → julio (6) o diciembre (11) se consideran vacaciones
