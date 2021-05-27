const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const { Schema } = mongoose

const Todo = new Schema({ text: String, completed: Boolean })
const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  todos: [Todo]
})

userSchema.statics.signUp = async function (username, password) {
  const user = new this()
  user.username = username
  user.hashPassword(password)

  await user.save()

  return user
}

userSchema.methods.hashPassword = function (plainText) {
  // TODO: change this to async version
  this.password = bcrypt.hashSync(plainText, 4)
}

userSchema.methods.sanitize = function () {
  return {
    ...this._doc,
    password: undefined
  }
}

userSchema.methods.comparePassword = function (plainText) {
  // TODO: change this to async version
  return bcrypt.compareSync(plainText, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User
