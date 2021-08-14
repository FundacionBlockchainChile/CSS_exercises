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

// Async Await
async function init() {
  await createPost({ title: 'Post Three', body: 'This is the third post' })
  getPosts()
}
init()

// Async Await with Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data)
}

fetchUsers()
