// ==========================================
// EJEMPLO 1: Mostrar la hora actual en formato local por defecto
// ==========================================

const ahora = new Date();

const horaLocal = ahora.toLocaleTimeString();

console.log("Ejemplo 1:", horaLocal);
// Ejemplo de salida: "14:30:15" (depende de la configuración regional)
// toLocaleTimeString() muestra únicamente la hora local



// ==========================================
// EJEMPLO 2: Mostrar la hora en formato español
// ==========================================

const fechaEspecifica = new Date("2026-12-25T18:45:00");

const horaES = fechaEspecifica.toLocaleTimeString("es-ES");

console.log("Ejemplo 2:", horaES);
// "18:45:00" → Hora en formato 24h según la configuración regional española



// ==========================================
// EJEMPLO 3: Formatear la hora con opciones detalladas
// ==========================================

const fechaOpciones = new Date("2026-02-07T09:15:30");

const horaFormateada = fechaOpciones.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
});

console.log("Ejemplo 3:", horaFormateada);
// "09:15:30 AM" → Formato 12 horas con minutos y segundos
