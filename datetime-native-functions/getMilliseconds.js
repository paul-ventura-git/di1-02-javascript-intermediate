// ==========================================
// EJEMPLO 1: Obtener los milisegundos actuales
// ==========================================

const ahora = new Date();

const milisegundos = ahora.getMilliseconds();

console.log("Ejemplo 1:", milisegundos);
// Devuelve los milisegundos (0 - 999) de la fecha actual
// Útil para mediciones precisas de tiempo



// ==========================================
// EJEMPLO 2: Obtener los milisegundos de una fecha específica
// ==========================================

const fechaEspecifica = new Date("2026-02-07T15:45:30.250");

const ms = fechaEspecifica.getMilliseconds();

console.log("Ejemplo 2:", ms);
// 250 → Extrae los milisegundos de la fecha indicada



// ==========================================
// EJEMPLO 3: Medir tiempo transcurrido en milisegundos
// ==========================================

const inicio = new Date();

// Simulación de proceso
for (let i = 0; i < 100000; i++) {
    Math.sqrt(i);
}

const fin = new Date();

const tiempoTranscurridoMs = fin.getTime() - inicio.getTime();

console.log("Ejemplo 3:", tiempoTranscurridoMs, "ms");
// Devuelve la duración en milisegundos del proceso
// Combina getTime() y getMilliseconds() para precisión
