// ==========================================
// EJEMPLO 1: Verificar si una cadena termina con una palabra específica
// ==========================================

const archivo = "documento.pdf";

const esPDF = archivo.endsWith(".pdf");

console.log("Ejemplo 1:", esPDF);
// true → La cadena termina con ".pdf"
// endsWith() devuelve true o false



// ==========================================
// EJEMPLO 2: Validar si un correo pertenece a un dominio específico
// ==========================================

const email = "usuario@gmail.com";

const esGmail = email.endsWith("@gmail.com");

console.log("Ejemplo 2:", esGmail);
// true → El correo pertenece al dominio gmail.com



// ==========================================
// EJEMPLO 3: Usar el segundo parámetro (longitud)
// ==========================================

const frase = "Hola mundo feliz";

const terminaEnMundo = frase.endsWith("mundo", 10);
// Solo evalúa hasta el índice 10 (sin incluir el resto)

console.log("Ejemplo 3:", terminaEnMundo);
// true → Considerando solo "Hola mundo"
// El segundo parámetro indica hasta qué longitud evaluar
