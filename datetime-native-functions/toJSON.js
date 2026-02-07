// ==========================================
// EJEMPLO 1: Convertir la fecha actual a JSON
// ==========================================

const ahora = new Date();

const jsonActual = ahora.toJSON();

console.log("Ejemplo 1:", jsonActual);
// "2026-02-07T14:30:15.123Z"
// toJSON() devuelve la fecha en formato ISO 8601 (UTC)
// Útil para enviar fechas en objetos JSON



// ==========================================
// EJEMPLO 2: Convertir una fecha específica a JSON
// ==========================================

const fechaEspecifica = new Date("2026-12-25T10:15:00");

const jsonFecha = fechaEspecifica.toJSON();

console.log("Ejemplo 2:", jsonFecha);
// "2026-12-25T10:15:00.000Z"
// Similar a toISOString(), pero pensado para serialización JSON



// ==========================================
// EJEMPLO 3: Usar toJSON() al convertir un objeto a JSON
// ==========================================

const evento = {
    nombre: "Cumpleaños",
    fecha: new Date("2026-06-10T18:00:00")
};

const eventoJSON = JSON.stringify(evento);

console.log("Ejemplo 3:", eventoJSON);
// {"nombre":"Cumpleaños","fecha":"2026-06-10T18:00:00.000Z"}
// toJSON() se llama automáticamente al serializar un objeto con JSON.stringify
