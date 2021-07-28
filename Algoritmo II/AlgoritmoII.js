// Predice el output para los siguientes fragmentos de código. No ejecutes el código directo en la consola o JSbin, hazlo manualmente sin computador. Saber hacer esto en papel es muy importante. Una vez que hayas hecho lo anterior, ejecuta el código en tu consola/JSbin y compara este resultado con tu predicción manual. Si tu predicción es diferente a los resultados del computador, intenta descifrar por qué y entender cómo funciona el código..

// function a() {
//   console.log('hello')
// }
// console.log('Dojo')
// Dojo

// function a() {
//   console.log('hello')
//   return 15
// }
// x = a()
// console.log('x is', x)
// Otuput hello, x is15

// function a(n) {
//   console.log('n is', n)
//   return n + 15
// }
// x = a(3)
// console.log('x is', x)
// n is3, x is18

// function a(n) {
//   console.log('n is', n)
//   y = n * 2
//   return y
// }
// x = a(3) + a(5)
// console.log('x is', x)
// n is 3, n is 5, x is 16

// function op(a, b) {
//   c = a + b
//   console.log('c is', c)
//   return c
// }
// x = op(2, 3) + op(3, 5)
// console.log('x is', x)
// c is 5, c is 8, x is 13

// function op(a, b) {
//   c = a + b
//   console.log('c is', c)
//   return c
// }
// x = op(2, 3) + op(3, op(2, 1)) + op(op(2, 1), op(2, 3))
// console.log('x is', x)
// c is 5,c is 3, c is 6, c is 3, c is 5, c is 8, c is 19

// var x = 15
// function a() {
//   var x = 10
// }
// console.log(x)
// a()
// console.log(x)
// 15,15

// function multiply(x, y) {
//   console.log(x)
//   console.log(y)
// }
// b = multiply(2, 3)
// console.log(b)
// 2,3,undefined

// function multiply(x, y) {
//   return x * y
// }
// b = multiply(2, 3)
// console.log(b)
// console.log(multiply(5, 2))
// 6, 10

// var x = [1, 2, 3, 4, 5, 10]
// for (var i = 0; i < 5; i++) {
//   i = i + 3
//   console.log(i)
// }
// 3,7

// var x = 15
// console.log(x)
// function awesome() {
//   var x = 10
//   console.log(x)
// }
// console.log(x)
// awesome()
// console.log(x)
// 15,15,10,15

// for (var i = 0; i < 15; i += 2) {
//   console.log(i)
// }
// 0,2,4,6,8,10,12,14

// Parte 2

// Print 1 to x
// Por favor, completa los siguientes códigos para que la función imprima (print) todos los enteros (integers) de 1 a x. Si x es negativo, haz que se muestre (print/log) “número negativo” y que la función devuelva falso.

function printUpTo(x) {
  if (x < 0) {
    console.log('numero negativo')
    return false
  }
  for (let i = 1; i <= x; i++) {
    console.log(i)
  }
}
printUpTo(1000) // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10) // debería imprimir false
console.log(y) // debería imprimir false

// Completa el código de más abajo para que la función imprima enteros (integers) de 0 a x y donde cada entero imprima la suma (sum) parcial. Haz que la función entregue la suma final.
function printSum(x) {
  var sum = 0
  //your code here
  for (let i = 0; i <= x; i++) {
    console.log(i)
    sum = sum + i
    // console.log(sum)
  }
  return sum
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640

// Completa el código a continuación para que la función entregue la suma de todos los valores en un array dado.
function printSumArray(x) {
  var sum = 0
  for (var i = 0; i < x.length; i++) {
    sum = x[i] + sum
  }
  return sum
}
// console.log(printSumArray([1, 2, 3])) // debería imprimir 6

// Bonus: LargestElement
// Crea una función que entregue el elemento más grande (largest element) en un array. Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30.
function largestElement(arr) {
  let largest = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i]
  }
  console.log(largest)
}

largestElement([1, 30, 5, 7])
