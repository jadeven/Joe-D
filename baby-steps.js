// console.log(process.argv)


// const stuff = xs => xs.reduce((arg, x) => arg + x, 2)
var adder = process.argv

var adder = adder.slice(2)
var adder = adder.reduce(function (x,y){
  return +x + +y})

console.log(adder)