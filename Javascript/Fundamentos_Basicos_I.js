// Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
const printNumbers = () => {
  for (let i = 1; i < 256; i++) {
    console.log(i)
  }
}
printNumbers()

// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.
const getSumOfEvenNumbersUntil1000 = () => {
  let sum = 0
  for (let i = 1; i < 1001; i++) {
    if (i % 2 === 0) sum = sum + i
  }
  return sum
}
console.log(getSumOfEvenNumbersUntil1000())

// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
const getSumOfOddNumbersUntil5000 = () => {
  let sum = 0
  for (let i = 1; i < 5001; i++) {
    if (i % 2 !== 0) sum = sum + i
  }
  return sum
}
console.log(getSumOfOddNumbersUntil5000())

// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).
const sumArrayItems = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum
}
console.log(sumArrayItems([1, 2, 5]))
console.log(sumArrayItems([-5, 2, 5, 12]))

// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).
const findMaxValueOf = (array) => {
  let max = -Infinity
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i]
  }
  return max
}
console.log(findMaxValueOf([-3, 3, 5, 7]))

// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
const findAverangeOfArray = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum / array.length
}
console.log(findAverangeOfArray([1, 3, 5, 7, 20]))

// Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
const makeArrayOfOddNumbers = () => {
  let arrayOfOdds = []
  for (let i = 0; i < 51; i++) {
    if (i % 2 !== 0) {
      arrayOfOdds.push(i)
    }
  }
  return arrayOfOdds
}
console.log(makeArrayOfOddNumbers())

// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).
const countAmountOfMajorThan = (array, number) => {
  let ammount = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) ammount++
  }
  return ammount
}
console.log(countAmountOfMajorThan([1, 3, 5, 7], 3))

// Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
const replaceForSquaredNUmbers = (array) => {
  for (let i = 0; i < array.length; i++) array[i] = array[i] * array[i]
  return array
}
console.log(replaceForSquaredNUmbers([1, 5, 10, -2]))

// Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
const replaceNegativesWihtCero = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) array[i] = 0
  }
  return array
}
console.log(replaceNegativesWihtCero([1, 5, 10, -2]))

// Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
const getMaxMinAndAverange = (arr) => {
  let max = -Infinity
  let min = Infinity
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
    sum = sum + arr[i]
  }
  return [max, min, sum / arr.length]
}
console.log(getMaxMinAndAverange([1, 5, 10, -2]))

// Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).
const twistFirstAndLast = (arr) => {
  let first = arr[0]
  let last = arr[arr.length - 1]
  arr[0] = last
  arr[arr.length - 1] = first
  return arr
}
console.log(twistFirstAndLast([1, 5, 10, -2]))

// De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
const NumberToString = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) arr[i] = 'Dojo'
  }
  return arr
}
console.log(NumberToString([-1, -3, 2]))
