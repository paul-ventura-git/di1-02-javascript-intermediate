// ==========================================
// EJEMPLO 1: Cambiar el día del mes de una fecha existente
// ==========================================

const fecha = new Date("2026-02-07");

fecha.setDate(15);

console.log("Ejemplo 1:", fecha);
// Cambia el día del mes a 15
// Resultado: 2026-02-15



// ==========================================
// EJEMPLO 2: Incrementar el día del mes en 10 días
// ==========================================

const fecha2 = new Date("2026-02-07");

fecha2.setDate(fecha2.getDate() + 10);

console.log("Ejemplo 2:", fecha2);
// 2026-02-17 → Se puede sumar días directamente
// Útil para cálculos de fechas futuras



// ==========================================
// EJEMPLO 3: Retroceder el día del mes al mes anterior
// ==========================================

const fecha3 = new Date("2026-03-05");

fecha3.setDate(0);

console.log("Ejemplo 3:", fecha3);
// 2026-02-29 → setDate(0) retrocede al último día del mes anterior
// Permite manejar fechas dinámicamente
