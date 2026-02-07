// ==========================================
// EJEMPLO 1: Verificar si un arreglo contiene un número específico
// ==========================================

const numeros = [5, 12, 8, 130, 44];

const contieneDoce = numeros.includes(12);

console.log("Ejemplo 1:", contieneDoce);
// true → El arreglo contiene el número 12



// ==========================================
// EJEMPLO 2: Verificar si un arreglo contiene un usuario específico
// ==========================================

const usuarios = ["Ana", "Luis", "Carlos"];

const existeLuis = usuarios.includes("Luis");

console.log("Ejemplo 2:", existeLuis);
// true → "Luis" está dentro del arreglo



// ==========================================
// EJEMPLO 3: Verificar si una cadena contiene una subcadena
// ==========================================

const mensaje = "Bienvenido al curso de JavaScript";

const contieneJavaScript = mensaje.includes("JavaScript");

console.log("Ejemplo 3:", contieneJavaScript);
// true → La cadena contiene la palabra "JavaScript"
