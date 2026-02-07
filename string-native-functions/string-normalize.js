// ==========================================
// EJEMPLO 1: Comparar strings con y sin acentos
// ==========================================

const palabraConAcento = "canción";
const palabraSinAcento = "canción"; 
// Esta versión puede estar compuesta por "o" + acento combinado

const sonIguales = palabraConAcento.normalize("NFC") === palabraSinAcento.normalize("NFC");

console.log("Ejemplo 1:", sonIguales);
// true → Después de normalizar, ambas cadenas son equivalentes
// normalize() unifica la representación Unicode



// ==========================================
// EJEMPLO 2: Eliminar acentos usando NFD
// ==========================================

const texto = "Programación en Español";

const textoSinAcentos = texto
    .normalize("NFD")                  // Separa letras y acentos
    .replace(/[\u0300-\u036f]/g, "");  // Elimina marcas diacríticas

console.log("Ejemplo 2:", textoSinAcentos);
// "Programacion en Espanol"
// Útil para búsquedas sin sensibilidad a acentos



// ==========================================
// EJEMPLO 3: Usar diferentes formas de normalización
// ==========================================

const caracter = "ñ";

const formaNFC = caracter.normalize("NFC");
const formaNFD = caracter.normalize("NFD");

console.log("Ejemplo 3 - NFC:", formaNFC);
console.log("Ejemplo 3 - NFD:", formaNFD);
// NFC → Forma compuesta
// NFD → Puede separar carácter base + marca diacrítica
// normalize() permite elegir entre NFC, NFD, NFKC y NFKD
