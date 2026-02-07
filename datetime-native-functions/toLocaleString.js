// ==========================================
// EJEMPLO 1: Mostrar la fecha y hora actual en formato local por defecto
// ==========================================

const ahora = new Date();

const fechaHoraLocal = ahora.toLocaleString();

console.log("Ejemplo 1:", fechaHoraLocal);
// Ejemplo de salida: "2/7/2026, 14:30:15" (depende de la configuración regional)
// toLocaleString() muestra fecha y hora según la localidad del usuario



// ==========================================
// EJEMPLO 2: Mostrar fecha y hora en formato español
// ==========================================

const fechaEspecifica = new Date("2026-12-25T18:45:00");

const fechaHoraES = fechaEspecifica.toLocaleString("es-ES");

console.log("Ejemplo 2:", fechaHoraES);
// "25/12/2026 18:45:00" → Formato Día/Mes/Año y hora según español



// ==========================================
// EJEMPLO 3: Formatear fecha y hora con opciones detalladas
// ==========================================

const fechaOpciones = new Date("2026-02-07T09:15:30");

const fechaFormateada = fechaOpciones.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
});

console.log("Ejemplo 3:", fechaFormateada);
// "Saturday, February 7, 2026, 09:15:30 AM" → Formato completo con día de la semana, mes en texto y hora en 12h
