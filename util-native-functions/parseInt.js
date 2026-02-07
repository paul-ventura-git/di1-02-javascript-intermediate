// ==========================================
// EJEMPLO 1: Convertir una cadena a número entero
// ==========================================

const strNumero = "42";

const numero = parseInt(strNumero);

console.log("Ejemplo 1:", numero);
// 42 → Convierte la cadena "42" en número entero



// ==========================================
// EJEMPLO 2: Convertir una cadena con texto al final
// ==========================================

const strMixta = "123abc";

const numeroMixto = parseInt(strMixta);

console.log("Ejemplo 2:", numeroMixto);
// 123 → parseInt toma los números iniciales y ignora los caracteres no numéricos



// ==========================================
// EJEMPLO 3: Convertir una cadena usando base diferente (hexadecimal)
// ==========================================

const strHex = "1A";

const numeroHex = parseInt(strHex, 16);

console.log("Ejemplo 3:", numeroHex);
// 26 → Convierte "1A" en base 16 a decimal
// El segundo parámetro indica la base numérica
