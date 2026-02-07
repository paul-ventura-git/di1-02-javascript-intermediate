// ==========================================
// EJEMPLO 1: Verificar si una cadena empieza con una palabra específica
// ==========================================

const frase = "JavaScript es un lenguaje potente";

const empiezaConJS = frase.startsWith("JavaScript");

console.log("Ejemplo 1:", empiezaConJS);
// true → La cadena comienza con "JavaScript"
// startsWith() devuelve true o false



// ==========================================
// EJEMPLO 2: Validar si una URL comienza con "https"
// ==========================================

const url = "https://www.ejemplo.com";

const esSegura = url.startsWith("https");

console.log("Ejemplo 2:", esSegura);
// true → La URL usa protocolo seguro



// ==========================================
// EJEMPLO 3: Usar el segundo parámetro (posición inicial)
// ==========================================

const mensaje = "Hola mundo, hola universo";

const empiezaConHolaDesdePos12 = mensaje.startsWith("hola", 12);

console.log("Ejemplo 3:", empiezaConHolaDesdePos12);
// true → Empieza a evaluar desde el índice 12
// El segundo parámetro indica desde qué posición comenzar la comparación
