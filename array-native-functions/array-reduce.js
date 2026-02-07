// ==========================================
// EJEMPLO 1: Sumar todos los números del arreglo
// ==========================================

const numeros = [5, 12, 8, 10];

const sumaTotal = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log("Ejemplo 1:", sumaTotal);
// 35 → 5 + 12 + 8 + 10
// reduce() recorre el arreglo y acumula un valor en cada iteración



// ==========================================
// EJEMPLO 2: Obtener la suma total de edades de usuarios
// ==========================================

const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 18 },
    { nombre: "Carlos", edad: 30 }
];

const sumaEdades = usuarios.reduce((acumulador, usuario) => {
    return acumulador + usuario.edad;
}, 0);

console.log("Ejemplo 2:", sumaEdades);
// 70 → 22 + 18 + 30
// Se acumula una propiedad específica de cada objeto



// ==========================================
// EJEMPLO 3: Contar cuántas veces aparece cada palabra
// ==========================================

const palabras = ["sol", "mar", "sol", "arena", "mar", "sol"];

const conteoPalabras = palabras.reduce((acumulador, palabra) => {
    if (acumulador[palabra]) {
        acumulador[palabra]++;
    } else {
        acumulador[palabra] = 1;
    }
    return acumulador;
}, {});

console.log("Ejemplo 3:", conteoPalabras);
// { sol: 3, mar: 2, arena: 1 }
// reduce() también puede construir objetos acumuladores
