// Ejercicio 1: Crea una función que devuelva la multiplicación de dos números

function product(x, y) {}

// Ejercicio 2: Devuelve el mayor de dos números

function maxOfTwoNumbers(a, b) {}

// Ejercicio 3: Devuelve el mayor de tres números. Cuidado con los negativos
function maxOfThreeNumbers(a, b, c) {
  let max = Math.min(...arguments);
  let nums = [...arguments];

  nums.forEach((el) => {
    if (el > max) {
      console.log(el);
      max = el;
      console.log(max);
    }
  });

  return max;
}
console.log(maxOfThreeNumbers(5, 2, 7));

// Ejercicio 4: IsEven. Le pasamos un número y devuelve true si es par, false si no

function isEven(num) {
  // your code
}

// Ejercicio 5: sumArray (numbers). Calcular la suma de un array de números

function sumArray(numbers) {
  // your code
}

// Ejercicio 6: Devuelve el mayor número dentro de un array de números. Devolver false si no hay números

function maxOfArray(numbers) {
  // your code
}

// Ejercicio 7: Encuentra la string más larga de un array
function longestStrings(strings) {
  // your code
}

// Ejercicio 8: Dado un objeto con las propiedades firstName y lastName, devolver un string con el nombre completo
function getFullName(personObj) {
  // your code
}

// Ejercicio 9: Mirar si existe una determinada palabra dentro de un array
function doesWordExist(wordsArr, word) {
  // your code
}

// Ejercicio 10: Función que recibe un array de palabras y debe devolver la primera que no se repite
function findUnique(wordsArr) {
  let word = "";
  wordsArr.every((el) => {
    const repetitions = wordsArr.filter((x) => x === el);
    if (repetitions.length === 1) {
      word = el;
      return false;
    } else return true;
  });
  return word;
}

// Ejercicio 11: Encontrar el máximo en un array de dos dimensiones

/* Ejemplo: 
const twoDimArr1 = [
            [1, 2, 3],
            [4, 3, 8],
            [5, 12, 9]
            ] */

function maxTwoDimArray(matrix) {
  // your code
}
