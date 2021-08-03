// Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.

function selectMajorValues(arr, value) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) count++
  }
  console.log(`The number of major values is ${count}`)
}
selectMajorValues([5, 8, 7, 9, 1, 2], 2)

// Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array.
function printMaxMinAndAvrg(arr) {
  let min = Infinity
  let max = -Infinity
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
    sum = sum + arr[i]
  }

  console.log(
    `The major is ${max}, the min is ${min} and the averange is ${
      sum / arr.length
    }`
  )
}
printMaxMinAndAvrg([6, 8, 4, 10, 12, 2])

// Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
function replaceNegatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) arr[i] = 'Dojo'
  }
  return arr
}
console.log(replaceNegatives([6, -8, 4, -10, 12, 2]))

// Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].
function removerRango(arr, a, b) {
  arr.splice(a, b - a + 1)
  return arr
}
console.log(removerRango([20, 30, 40, 50, 60, 70], 2, 4))
