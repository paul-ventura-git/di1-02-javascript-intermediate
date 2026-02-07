// ==========================================
// EJEMPLO 1: Cambiar la hora de una fecha existente
// ==========================================

const fecha = new Date("2026-02-07T10:30:00");

fecha.setHours(15);

console.log("Ejemplo 1:", fecha);
// Cambia la hora a 15:00, mantiene minutos y segundos
// Resultado: 2026-02-07T15:30:00



// ==========================================
// EJEMPLO 2: Establecer hora, minutos y segundos opcionalmente
// ==========================================

const fecha2 = new Date("2026-02-07T10:30:00");

// setHours(hora, minutos, segundos, milisegundos)
fecha2.setHours(20, 45, 30);

console.log("Ejemplo 2:", fecha2);
// 2026-02-07T20:45:30 → Se pueden actualizar hora, minutos y segundos



// ==========================================
// EJEMPLO 3: Incrementar la hora en 3 horas
// ==========================================

const fecha3 = new Date("2026-02-07T10:30:00");

fecha3.setHours(fecha3.getHours() + 3);

console.log("Ejemplo 3:", fecha3);
// 2026-02-07T13:30:00 → Útil para sumar tiempo dinámicamente
