const fs = require('fs')
// let bufferObject = fs.readFileSync('process.argv[2]')

fs.readFile(process.argv[2], function (err, data){
    if (err){
        console.log(err)
    }
    const lines = data.toString().split('\n')
    console.log(lines.length -1)
})













































