var yo = require('yo-yo')

var element = yo`<div>hello world </div>`


const renderTodos = require('./render2')

const todos = [
  { text: 'take out the trash', completed: true },
  { text: 'do the dishes', completed: false },
]

const ul = document.getElementById('todos')
const todoInput = document.getElementById('todo-input')
const addTodo = document.getElementById('add-todo')
const showAll = document.getElementById('all')
const showCompleted = document.getElementById('completed')
const showIncomplete = document.getElementById('incomplete')

showAll.onclick = () => {
  filter = filterAll
  render()
}

showCompleted.onclick = () => {
  filter = filterCompleted
  render()
}

showIncomplete.onclick = () => {
  filter = filterIncomplete
  render()
}

const filterAll = todo => true
const filterCompleted = todo => todo.completed
const filterIncomplete = todo => !todo.completed

let filter = filterAll

addTodo.onsubmit = event => {
  event.preventDefault()

  const newTodoText = todoInput.value
  todos.push({ text: newTodoText, completed: false })
  renderTodos(todos, ul, render, filter)
}

function render () {
  renderTodos(todos, ul, render, filter)
}

renderTodos(todos, ul, render, filter)



