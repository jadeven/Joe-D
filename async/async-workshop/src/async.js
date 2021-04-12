//Async Utilities
// describe('parallel', function () {
//   it('should call the functions without waiting until the previous function completes. Once tasks have completed, results are passed to the final callback as an array ', function (done) {
//     const testArr = []


//     async.parallel([


//FIRST ARRAY ITEM
//       function (callback) {
//         setTimeout(function () {
//           testArr.push('one')
//           callback(null, 'one')
//         }, 200)
//       },  ===========================tempF [the first time]





//SECOND ARRAY ITEM
//       function (callback) {
//         setTimeout(function () {
//           testArr.push('two')
//           callback(null, 'two')
//         }, 100)
//       }
//     ],




// CALLBACK
//       function (err, results) {
//         expect(err).toEqual(null)
//         // the results array will equal ['one','two'] even though
//         // the second function had a shorter timeout.
//         expect(results).toEqual(['one', 'two'])

//         // however, our testArr should have had 'two' pushed to it first
//         expect(testArr).toEqual(['two', 'one'])
//         done()
//       })
//   })
function parallel(tasks, callback1) {
  let results = []
  let counter = 0
  for (let i = 0; i < tasks.length; ++i) {
    // console.log(tasks[i])
    let tempF = tasks[i]
    tempF(function (err, message) {
      if (err){
        return callback1(err)
      }
      results[i] = message
      counter++

      if(tasks.length === counter){
        callback1(null, results)
      }
    })
  }
}

//results of console logging callback
// ƒ (err, results) {
//   expect(err).toBeInstanceOf(Error)
//   expect(err.message).toEqual('Error')
//   expect(testArr).toEqual(['two'])
//   done()
// }

// Try to define map using parallel
function map(collection, iteratee, callback) {

}

function waterfall(tasks, callback) {

}

export default {
  waterfall,
  parallel,
  map
}