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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}

// getPosts()

createPost({ title: 'Post Three', body: 'This is the third post' }, getPosts)
