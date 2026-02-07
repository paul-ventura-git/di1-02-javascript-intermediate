// ==========================================
// EJEMPLO 1: Obtener el primer carácter de una cadena
// ==========================================

const palabra = "JavaScript";

const primerCaracter = palabra.charAt(0);

console.log("Ejemplo 1:", primerCaracter);
// "J" → Es el carácter en la posición 0
// charAt(indice) devuelve el carácter en la posición indicada



// ==========================================
// EJEMPLO 2: Obtener el último carácter de una cadena
// ==========================================

const mensaje = "Programación";

const ultimoCaracter = mensaje.charAt(mensaje.length - 1);

console.log("Ejemplo 2:", ultimoCaracter);
// "n" → Es el último carácter de la cadena
// Se usa length - 1 para acceder al último índice



// ==========================================
// EJEMPLO 3: Índice fuera de rango
// ==========================================

const texto = "Hola";

const caracterInvalido = texto.charAt(10);

console.log("Ejemplo 3:", caracterInvalido);
// "" (cadena vacía)
// Si el índice no existe, charAt() devuelve una cadena vacía
