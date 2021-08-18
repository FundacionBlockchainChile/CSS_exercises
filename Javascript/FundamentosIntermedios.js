// Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
const sigma = (num) => {
  let sum = 0
  for (let i = 0; i <= num; i++) {
    sum = sum + i
  }
  return sum
}
console.log(sigma(3))
console.log(sigma(5))

// Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
const factorial = (num) => {
  let mult = 1
  for (let i = 1; i <= num; i++) {
    mult = mult * i
  }
  return mult
}
console.log(factorial(3))
console.log(factorial(5))

// Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad.
const fibonacci = (num) => {
  if (num === 0) return 0
  if (num === 1) return 1
  let i
  let fib = [] // Initialize array!

  fib[0] = 0
  fib[1] = 1
  for (i = 2; i <= num; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1]
  }
  return fib[fib.length - 1]
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))

// Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.
const retornarPenultimo = (arr) => {
  if (arr.length < 2) return null
  return arr[arr.length - 2]
}
console.log(retornarPenultimo([42, true, 4, 'Liam', 7]))
console.log(retornarPenultimo([7]))

// Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null.
const retornarElemento = (arr, backIndex) => {
  if (arr.length < 2) return null
  return arr[arr.length - backIndex - 1]
}
console.log(retornarElemento([5, 2, 3, 6, 4, 9, 7], 3))
console.log(retornarElemento([5], 3))

// Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.
const getSecondMax = (arr) => {
  let max = -Infinity
  let secondMax = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < max && arr[i] > secondMax) secondMax = arr[i]
  }
  return secondMax
}
console.log(getSecondMax([42, 1, 4, 3.14, 7]))
console.log(getSecondMax([42, 1, 4, 3.14, 7, 9]))
console.log(getSecondMax([42, 1, 4, 3.14, 9, 7]))

// Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
const duplicateItems = (arr) => {
  let duplicates = []
  for (let i = 0; i < arr.length; i++) {
    duplicates.push(arr[i])
    duplicates.push(arr[i])
  }
  return duplicates
}
console.log(duplicateItems([4, 'Ulysses', 42, false]))
