// ==========================================
// EJEMPLO 1: Obtener el año actual
// ==========================================

const hoy = new Date();

const anioActual = hoy.getFullYear();

console.log("Ejemplo 1:", anioActual);
// Devuelve el año completo (ej. 2026)
// Útil para mostrar o comparar años



// ==========================================
// EJEMPLO 2: Obtener el año de una fecha específica
// ==========================================

const fechaEspecifica = new Date("1995-06-15");

const anio = fechaEspecifica.getFullYear();

console.log("Ejemplo 2:", anio);
// 1995 → Extrae el año de la fecha indicada



// ==========================================
// EJEMPLO 3: Calcular la edad a partir del año de nacimiento
// ==========================================

const fechaNacimiento = new Date("1990-08-20");

const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

console.log("Ejemplo 3:", edad);
// 36 → Resta el año actual menos el año de nacimiento
// Útil para calcular edades o antigüedad
