// ==========================================
// EJEMPLO 1: Unir dos cadenas simples
// ==========================================

const saludo = "Hola";
const nombre = "Carlos";

const mensaje = saludo.concat(" ", nombre);

console.log("Ejemplo 1:", mensaje);
// "Hola Carlos"
// concat() une cadenas y devuelve una nueva (no modifica las originales)



// ==========================================
// EJEMPLO 2: Unir múltiples cadenas
// ==========================================

const base = "JavaScript";

const fraseCompleta = base.concat(" es", " un", " lenguaje", " poderoso");

console.log("Ejemplo 2:", fraseCompleta);
// "JavaScript es un lenguaje poderoso"
// concat() permite unir varias cadenas en una sola llamada



// ==========================================
// EJEMPLO 3: Concatenar variables y valores dinámicos
// ==========================================

const producto = "Laptop";
const precio = 1200;

const descripcion = "Producto: ".concat(producto, " | Precio: $", precio);

console.log("Ejemplo 3:", descripcion);
// "Producto: Laptop | Precio: $1200"
// concat() convierte automáticamente números a string
