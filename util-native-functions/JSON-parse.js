// ==========================================
// EJEMPLO 1: Convertir un JSON simple a objeto
// ==========================================

const jsonPersona = '{"nombre":"Ana","edad":25,"ciudad":"Lima"}';

const persona = JSON.parse(jsonPersona);

console.log("Ejemplo 1:", persona);
// { nombre: 'Ana', edad: 25, ciudad: 'Lima' }
// Convierte una cadena JSON a un objeto JavaScript



// ==========================================
// EJEMPLO 2: Convertir un JSON de arreglo a arreglo JS
// ==========================================

const jsonNumeros = '[10,20,30,40]';

const numeros = JSON.parse(jsonNumeros);

console.log("Ejemplo 2:", numeros);
// [ 10, 20, 30, 40 ]
// Útil para recibir datos de APIs o almacenamiento en JSON



// ==========================================
// EJEMPLO 3: Convertir un JSON con fechas y revivirlas
// ==========================================

const jsonEvento = '{"nombre":"Cumpleaños","fecha":"2026-06-10T18:00:00.000Z"}';

const evento = JSON.parse(jsonEvento, (key, value) => {
    if (key === "fecha") return new Date(value);
    return value;
});

console.log("Ejemplo 3:", evento);
// { nombre: 'Cumpleaños', fecha: 2026-06-10T18:00:00.000Z }
// La función reviver permite convertir strings de fecha a objetos Date
