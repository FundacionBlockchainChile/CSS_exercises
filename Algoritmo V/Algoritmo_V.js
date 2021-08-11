// Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].

const resetNegativos = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) arr[i] = 0
  }
  return arr
}
// console.log(resetNegativos([1, 2, -1, -3]))

// Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].
const moverAdelante = (arr) => {
  for (let i = 1; i < arr.length + 1; i++) {
    arr[i - 1] = arr[i]
    if (arr[i] === undefined) arr[i - 1] = 0
  }
  return arr
}
// console.log(moverAdelante([1, 2, 3]))

// Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].
const returnReverso = (arr) => {
  let inverseArray = []
  for (let i = arr.length - 1; i > -1; i--) {
    inverseArray.push(arr[i])
  }
  return inverseArray
}
// console.log(returnReverso([1, 2, 3]))

// Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
const repetirValores = (arr) => {
  let duplicatedValues = []
  for (let i = 0; i < arr.length; i++) {
    duplicatedValues.push(arr[i])
    duplicatedValues.push(arr[i])
  }
  return duplicatedValues
}
// console.log(repetirValores([4, 'Ulysses', 42, false]))
