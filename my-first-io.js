const fs = require('fs')
// let bufferObject = fs.readFileSync('process.argv[2]')

console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length -1)
// let stringed = bufferObject.split('')
// console.log(bufferObject)

// function checker (n){
//     return n = '\n'
// }

// let dakine = stringed.find(checker)