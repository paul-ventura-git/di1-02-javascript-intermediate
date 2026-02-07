// ==========================================
// EJEMPLO 1: Reemplazar una palabra específica
// ==========================================

const frase = "Aprendiendo JavaScript paso a paso";

const nuevaFrase = frase.replace("JavaScript", "TypeScript");

console.log("Ejemplo 1:", nuevaFrase);
// "Aprendiendo TypeScript paso a paso"
// replace() reemplaza solo la primera coincidencia
// Devuelve una nueva cadena (no modifica la original)



// ==========================================
// EJEMPLO 2: Reemplazar todas las coincidencias con expresión regular
// ==========================================

const texto = "sol mar sol arena sol";

const textoModificado = texto.replace(/sol/g, "luna");

console.log("Ejemplo 2:", textoModificado);
// "luna mar luna arena luna"
// La bandera "g" permite reemplazar todas las coincidencias



// ==========================================
// EJEMPLO 3: Usar función como segundo parámetro
// ==========================================

const mensaje = "Precio: 100 dólares";

const mensajeActualizado = mensaje.replace(/\d+/, function(numero) {
    return Number(numero) * 2;
});

console.log("Ejemplo 3:", mensajeActualizado);
// "Precio: 200 dólares"
// Se puede usar una función para transformar dinámicamente la coincidencia
