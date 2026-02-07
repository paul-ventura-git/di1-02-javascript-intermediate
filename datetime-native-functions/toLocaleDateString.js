// ==========================================
// EJEMPLO 1: Mostrar la fecha actual en formato local por defecto
// ==========================================

const hoy = new Date();

const fechaLocal = hoy.toLocaleDateString();

console.log("Ejemplo 1:", fechaLocal);
// Ejemplo de salida: "7/2/2026" (depende de la configuración regional del navegador)
// toLocaleDateString() muestra la fecha según la localidad del usuario



// ==========================================
// EJEMPLO 2: Mostrar la fecha en formato español
// ==========================================

const fechaEspecifica = new Date("2026-12-25");

const fechaES = fechaEspecifica.toLocaleDateString("es-ES");

console.log("Ejemplo 2:", fechaES);
// "25/12/2026" → Día/Mes/Año según configuración regional española



// ==========================================
// EJEMPLO 3: Formatear la fecha con opciones detalladas
// ==========================================

const fechaOpciones = new Date("2026-02-07");

const fechaFormateada = fechaOpciones.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

console.log("Ejemplo 3:", fechaFormateada);
// "Saturday, February 7, 2026" → Incluye día de la semana, mes en text
