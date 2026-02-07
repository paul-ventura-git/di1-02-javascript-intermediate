// ==========================================
// EJEMPLO 1: Convertir un objeto simple a JSON
// ==========================================

const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Lima"
};

const jsonPersona = JSON.stringify(persona);

console.log("Ejemplo 1:", jsonPersona);
// {"nombre":"Ana","edad":25,"ciudad":"Lima"}
// Convierte un objeto JavaScript a una cadena JSON



// ==========================================
// EJEMPLO 2: Convertir un arreglo a JSON
// ==========================================

const numeros = [10, 20, 30, 40];

const jsonNumeros = JSON.stringify(numeros);

console.log("Ejemplo 2:", jsonNumeros);
// [10,20,30,40]
// Útil para enviar arreglos a APIs o almacenarlos en texto



// ==========================================
// EJEMPLO 3: Convertir un objeto con fecha a JSON
// ==========================================

const evento = {
    nombre: "Cumpleaños",
    fecha: new Date("2026-06-10T18:00:00")
};

const jsonEvento = JSON.stringify(evento);

console.log("Ejemplo 3:", jsonEvento);
// {"nombre":"Cumpleaños","fecha":"2026-06-10T18:00:00.000Z"}
// toJSON() se llama automáticamente en objetos Date al usar JSON.stringify
