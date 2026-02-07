// ==========================================
// EJEMPLO 1: Crear un timestamp en formato UTC
// ==========================================

const timestampUTC = Date.UTC(2026, 1, 7);
// Año, mes (0 = enero), día
// Ojo: el mes empieza desde 0

console.log("Ejemplo 1:", timestampUTC);
// Devuelve los milisegundos desde 1970-01-01 en horario UTC



// ==========================================
// EJEMPLO 2: Convertir el timestamp UTC en objeto Date
// ==========================================

const timestamp = Date.UTC(2026, 5, 15, 10, 30, 0);
// Año, mes, día, hora, minutos, segundos (todo en UTC)

const fecha = new Date(timestamp);

console.log("Ejemplo 2:", fecha);
// Crea una fecha basada en UTC
// Útil cuando se trabaja con zonas horarias



// ==========================================
// EJEMPLO 3: Comparar fechas usando UTC
// ==========================================

const inicio = Date.UTC(2026, 0, 1);
const fin = Date.UTC(2026, 11, 31);

const diferencia = fin - inicio;

console.log("Ejemplo 3:", diferencia);
// Calcula la diferencia en milisegundos entre dos fechas en UTC
// Evita problemas de zona horaria local
