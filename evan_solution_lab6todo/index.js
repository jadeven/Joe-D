const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const todoRoutes = require('./routes/todos')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/', userRoutes)
app.use('/', todoRoutes)

const connectDatabase = async (databaseName, hostname) => {
  const database = await mongoose.connect(
    `mongodb://${hostname}/${databaseName}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )

  console.log(`Database connected at mongodb://${hostname}/${databaseName}`)

  return database
}

const startServer = port => {
  app.listen(port, async () => {
    await connectDatabase('todo-list-auth2', 'localhost')
    console.log(`Server listening on port ${port}`)
  })
}

startServer(8000)
