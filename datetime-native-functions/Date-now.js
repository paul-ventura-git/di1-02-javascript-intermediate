// ==========================================
// EJEMPLO 1: Obtener el timestamp actual
// ==========================================

const timestampActual = Date.now();

console.log("Ejemplo 1:", timestampActual);
// Devuelve la cantidad de milisegundos
// transcurridos desde el 1 de enero de 1970 (Unix Epoch)



// ==========================================
// EJEMPLO 2: Medir el tiempo de ejecución de un proceso
// ==========================================

const inicio = Date.now();

// Simulación de proceso
for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
}

const fin = Date.now();

const tiempoTranscurrido = fin - inicio;

console.log("Ejemplo 2:", tiempoTranscurrido, "ms");
// Calcula cuánto tiempo tardó el proceso en milisegundos



// ==========================================
// EJEMPLO 3: Crear un objeto Date a partir del timestamp
// ==========================================

const timestamp = Date.now();

const fechaActual = new Date(timestamp);

console.log("Ejemplo 3:", fechaActual);
// Convierte el timestamp actual en un objeto Date
// para obtener una fecha legible
