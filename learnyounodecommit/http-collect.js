const http = require('http')

const url = process.argv[2]

let messages = {name: 'John', text : 'hello'}

http.get (url, response => {
    let complete = '';
    response.on('error', err => console.log(err))
    response.setEncoding ('utf8')
    response.on('data', data => complete += data)
    response.on('end', ()=> {
        console.log(complete)
    })
})

