// ==========================================
// EJEMPLO 1: Buscar una palabra específica
// ==========================================

const frase = "Aprendiendo JavaScript paso a paso";

const resultado = frase.match("JavaScript");

console.log("Ejemplo 1:", resultado);
// ["JavaScript"]
// match() devuelve un arreglo con la coincidencia
// o null si no encuentra nada



// ==========================================
// EJEMPLO 2: Buscar todas las coincidencias con expresión regular global
// ==========================================

const texto = "sol mar sol arena sol";

const coincidencias = texto.match(/sol/g);

console.log("Ejemplo 2:", coincidencias);
// ["sol", "sol", "sol"]
// La bandera "g" devuelve todas las coincidencias



// ==========================================
// EJEMPLO 3: Extraer números de una cadena
// ==========================================

const mensaje = "Pedido #1234 - Total: 450 soles";

const numeros = mensaje.match(/\d+/g);

console.log("Ejemplo 3:", numeros);
// ["1234", "450"]
// \d+ busca uno o más dígitos consecutivos
// match() es muy útil junto con expresiones regulares
