// ==========================================
// EJEMPLO 1: Convertir una fecha en string a timestamp
// ==========================================

const fechaString = "2026-02-07";

const timestamp = Date.parse(fechaString);

console.log("Ejemplo 1:", timestamp);
// Devuelve la cantidad de milisegundos desde 1970-01-01
// Date.parse() convierte una fecha en texto a timestamp



// ==========================================
// EJEMPLO 2: Crear un objeto Date a partir del parse
// ==========================================

const fechaTexto = "March 15, 2026 10:30:00";

const timestamp2 = Date.parse(fechaTexto);

const fechaObjeto = new Date(timestamp2);

console.log("Ejemplo 2:", fechaObjeto);
// Convierte un string de fecha en objeto Date utilizable



// ==========================================
// EJEMPLO 3: Comparar dos fechas
// ==========================================

const inicio = Date.parse("2026-01-01");
const fin = Date.parse("2026-12-31");

const diferencia = fin - inicio;

console.log("Ejemplo 3:", diferencia);
// Calcula la diferencia en milisegundos entre dos fechas
// Útil para cálculos de duración
