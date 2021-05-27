const fetch = require('node-fetch')

function signup () {
  fetch('http://localhost:8000/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: 'bob', password: 'bob' })
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

function login () {
  fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: 'bob', password: 'bob' })
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

function postTodo () {
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmMTZlOTliODg2ZjcwYmIwNmIxM2UiLCJpYXQiOjE2MjIwODc0NzN9.99juxNozukS2fq_5_5WOUw-nnIy3nz2fH9nu5GyCagU'

  fetch('http://localhost:8000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ todo: 'take out the trash' })
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

function getTodos () {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmMTZlOTliODg2ZjcwYmIwNmIxM2UiLCJpYXQiOjE2MjIwODc0NzN9.99juxNozukS2fq_5_5WOUw-nnIy3nz2fH9nu5GyCagU'

  fetch('http://localhost:8000/todos', {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

getTodos()
// postTodo()
// login()
// signup()
