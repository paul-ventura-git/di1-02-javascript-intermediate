// ==========================================
// EJEMPLO 1: Convertir la fecha actual a string
// ==========================================

const ahora = new Date();

const fechaString = ahora.toString();

console.log("Ejemplo 1:", fechaString);
// Ejemplo de salida: "Sat Feb 07 2026 14:30:15 GMT-0500 (hora estándar de Perú)"
// toString() convierte la fecha completa a un string legible en zona horaria local



// ==========================================
// EJEMPLO 2: Convertir una fecha específica a string
// ==========================================

const fechaEspecifica = new Date("2026-12-25T18:45:00");

const fechaEspecificaString = fechaEspecifica.toString();

console.log("Ejemplo 2:", fechaEspecificaString);
// "Fri Dec 25 2026 18:45:00 GMT-0500 (hora estándar de Perú)"
// Muestra la fecha y hora exacta en formato legible



// ==========================================
// EJEMPLO 3: Usar toString() para concatenar con texto
// ==========================================

const fechaEvento = new Date("2026-06-10T10:00:00");

const mensaje = "La fecha del evento es: " + fechaEvento.toString();

console.log("Ejemplo 3:", mensaje);
// "La fecha del evento es: Wed Jun 10 2026 10:00:00 GMT-0500 (hora estándar de Perú)"
// Útil para mostrar fechas en mensajes de usuario
