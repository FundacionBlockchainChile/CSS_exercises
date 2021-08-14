const posts = [
  { title: 'Post One', body: 'This is the first post' },
  { title: 'Post Two', body: 'This is the second post' },
]

function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
  }, 1000)
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)

      const error = false

      if (!error) {
        resolve()
      } else {
        reject('Error: something went wrong')
      }
    }, 2000)
  })
}

// createPost({ title: 'Post Three', body: 'This is the third post' })
//   .then(getPosts)
//   .catch((error) => console.log(error))

// Promises all
const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
  (response) => response.json()
)

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
)
