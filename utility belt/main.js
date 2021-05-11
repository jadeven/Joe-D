const _ = {}

_.each = (array, iteratee) => {
  for (let i =0; i< array.length; i++){
  iteratee(array[i], i, array)
  }
}

_.map = (array, iteratee) => {
  let newarray = []
  for (let i=0; i<array.length; i++){
   newarray.push(iteratee( array[i], i, array))
}
  return newarray
}

_.filter = (array, predicate) => {
  let newarray = []
  for (let i=0; i<array.length; i++){
    if (predicate( array[i],i, array) === true){
      newarray.push(( array[i]))
    }
  }
  return newarray
}


_.find = (array, predicate) => {
  for (let i = 0; i < array.length; ++i) {
    if (predicate(array[i], i, array)=== true) {
      return array[i]
    }
  }
}


_.random = (min, max) => {
  let random = Math.floor(Math.random();
  return random;
}

_.range = (start, stop, step) => {
  let newarray = []
  for (let i=start; i< stop; i+= step){
    newarray.push(i)
      }

export default _
