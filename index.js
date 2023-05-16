/**Filmina 25
 * 
 * Dados los objetos indicados en la siguiente diapositiva:
1-Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), 
consejo: utilizar Object.keys y Array.includes. 
Mostrar el array por consola.
2-Posteriormente, obtener el total de productos vendidos por todos los objetos 
(utilizar Object.values)
 */

const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

//1

let lista = [];
objetos.forEach((objeto) => {
  //recorro todas las keys del objeto
  Object.keys(objeto).forEach((key) => {
    // si esa key no está en el array, la agrego
    if (!lista.includes(key)) {
      lista.push(key);
    }
  });
});
console.log("Todos los tipos de productos son : ", lista);

//2
//usando forEach y if
let total = 0;
objetos.forEach((objeto) => {
  Object.values(objeto).forEach((value) => {
    total += value;
  });
});
console.log("Total de productos vendidos : ", total);

//usando reduce
// let total = 0;
// objetos.forEach((objeto) => {
//   total += Object.values(objeto).reduce((a, b) => a + b);
// });
// console.log(total);
