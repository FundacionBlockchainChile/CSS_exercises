// // Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
const grande = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) arr[i] = 'big'
  }
  return arr
}
console.log(grande([-1, 3, 5, -5]))

// Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.
const replaceMayorMenor = (arr) => {
  let mayor = 0
  let menor = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[menor]) menor = i
    if (arr[i] > arr[mayor]) mayor = i
  }
  arr[mayor] = 'return'
  arr[menor] = 'print'
  return arr
}
console.log(replaceMayorMenor([1, 5, 7, 10]))

// Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
const replaceValues = (arr) => {
  let impar = undefined
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && impar === undefined) impar = i
  }
  arr[arr.length - 2] = 'print'
  arr[impar] = 'return'
  return arr
}
console.log(replaceValues([2, 2, 3, 4, 5, 6, 7]))

// Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.
const doble = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i]
  }
  return arr
}
console.log(doble([1, 2, 3]))

// Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
const contarPositivos = (arr) => {
  let cantidadDePositivos = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) cantidadDePositivos++
  }
  arr[arr.length - 1] = cantidadDePositivos
  return arr
}
console.log(contarPositivos([-1, 1, 1, 1]))

// Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
const isImparcial = (arr) => {
  let pares = 0
  let impares = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares++
      impares = 0
    }
    if (arr[i] % 2 !== 0) {
      pares = 0
      impares++
    }
    console.log(arr[i])
    if (impares === 3) {
      console.log('¡Qué imparcial!')
    }
    if (pares === 3) {
      console.log('¡Es para bien!')
    }
  }
}
isImparcial([0, 0, 2, 3, 5, 7, 6, 8, 10, 9, 11, 15, 2, 2, 4, 5])

// Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr.
const addOneToOddNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) arr[i] = arr[i] + 1
    console.log(arr[i])
  }
  return arr
}
console.log(addOneToOddNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
const longitudesPrevias = (arr) => {
  let newArr = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    newArr[i] = arr[i - 1].length
  }
  return newArr
}
console.log(longitudesPrevias(['programar', 'dojo', 'genial']))

// Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.
const agregaSiete = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 7
  }
  return arr
}
console.log(agregaSiete([1, 2, 3]))

// Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
const invertir = (arr) => {
  let tempLeft = undefined
  let tempRight = undefined
  for (let i = 0; i < arr.length / 2; i++) {
    tempLeft = arr[i]
    tempRight = arr[arr.length - 1 - i]
    arr[i] = tempRight
    arr[arr.length - 1 - i] = tempLeft
  }
  return arr
}
console.log(invertir([3, 1, 6, 4, 2]))

// Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
const convertToNegatives = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) arr[i] = arr[i] * -1
  }
  return arr
}
console.log(convertToNegatives([1, -3, 5]))

// Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.
const siempreHambriento = (arr) => {
  let haveMeal = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'comida') {
      console.log('yummy')
      haveMeal = true
    }
  }
  if (!haveMeal) console.log('tengo hambre')
}
siempreHambriento(['sopita', 'nada', 'chala', 'papel'])
siempreHambriento(['comida', 'nada', 'chala', 'papel'])

// Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.????
const cambiaHaciaElCentro = (arr) => {
  let tempLeft = undefined
  let tempRight = undefined
  for (let i = 0; i < arr.length / 2; i = i + 2) {
    tempLeft = arr[i]
    tempRight = arr[arr.length - 1 - i]
    arr[i] = tempRight
    arr[arr.length - 1 - i] = tempLeft
  }
  return arr
}
console.log(cambiaHaciaElCentro([true, 42, 'Ada', 2, 'pizza']))
console.log(cambiaHaciaElCentro([1, 2, 3, 4, 5, 6]))

// Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
const escalaArray = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num
  }
  return arr
}
console.log(escalaArray([1, 2, 3], 3))
