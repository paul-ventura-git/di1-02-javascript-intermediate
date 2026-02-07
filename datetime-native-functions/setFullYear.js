// ==========================================
// EJEMPLO 1: Cambiar el año de una fecha existente
// ==========================================

const fecha = new Date("2026-02-07");

fecha.setFullYear(2030);

console.log("Ejemplo 1:", fecha);
// Cambia el año a 2030, mantiene el mes y día
// Resultado: 2030-02-07



// ==========================================
// EJEMPLO 2: Incrementar el año en 5 años
// ==========================================

const fecha2 = new Date("2026-02-07");

fecha2.setFullYear(fecha2.getFullYear() + 5);

console.log("Ejemplo 2:", fecha2);
// 2031-02-07 → Se puede sumar años dinámicamente



// ==========================================
// EJEMPLO 3: Cambiar año, mes y día opcionalmente
// ==========================================

const fecha3 = new Date("2026-02-07");

// setFullYear(año, mes, día)
fecha3.setFullYear(2028, 11, 25);

console.log("Ejemplo 3:", fecha3);
// 2028-12-25 → Permite actualizar año, mes y día en una sola llamada
