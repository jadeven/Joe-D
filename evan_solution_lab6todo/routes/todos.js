const express = require('express')
const authenticate = require('../middleware/authenticate')

const router = express.Router()

router.post('/todos', [authenticate], async (req, res) => {
  console.log(req.body.todo)

  const newTodo = { text: req.body.todo, completed: false }
  req.user.todos.push(newTodo)
  await req.user.save()
  return res.send({ todos: req.user.todos })
})

router.get('/todos', [authenticate], async (req, res) => {
  return res.send({ todos: req.user.todos })
})


module.exports = router
