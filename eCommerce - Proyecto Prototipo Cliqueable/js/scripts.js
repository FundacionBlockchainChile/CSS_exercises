// const food = ['empanadas', 'cazuelas', 'lentejas', 'porotos']

// //length
// const foodLength = food.length
// console.log(foodLength)

// //forEach
// const scores = [50, 60, 70, 80, 90, 100]
// scores.forEach((element) => {
//   if (element > 65) console.log('Score over 65', element)
// })

// //sort
// const pets = ['jefazo', 'edi', 'rex', 'zafi', 'cachupin']
// console.log(pets.sort())

// //de mayor a menor
// const grade = [88, 94, 72, 99, 53, 77]
// grade.sort((a, b) => b - a)
// console.log(grade)

// //de menor a mayor
// grade.sort((a, b) => a - b)
// console.log(grade)

// //reverse
// const alumnos = ['Roberto', 'Katherine', 'Constanza', 'Fabiola', 'Rolando']
// const reversed = [...alumnos]
// console.log('reverse', reversed.reverse())
// console.log('original', alumnos)

// //find y find index
// const grade2 = [99, 83, 87, 91, 77]
// const underEighty = grade2.find((element) => element < 80)
// console.log(underEighty)

// const overEighty = function () {
//   return grade2.findIndex((element) => element > 80)
// }
// console.log(overEighty())

const students = [
  { name: 'Jonh', grade: 75 },
  { name: 'Jane', grade: 93 },
  { name: 'Smantha', grade: 90 },
  { name: 'Michael', grade: 94 },
]

// let sorted = students.sort((a, b) => b.grade - a.grade)
// let reversed = students.reverse()
// console.log(students.reverse())

// function encontraGradeSegunNombre(nombre) {
//   return students.find((student) => student.name === nombre).grade
// }

// console.log(encontraGradeSegunNombre('Jane'))
