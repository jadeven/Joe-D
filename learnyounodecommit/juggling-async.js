const http = require('http')

const urls = process.argv.slice(2)

http.get (urls[0], response => {
    let complete1 = '';
    response.on('error', err => console.log(err))
    response.setEncoding ('utf8')
    response.on('data', data => {
        complete1 += data
    })
    response.on('end', ()=> {
        console.log(complete1)
    })
    http.get (urls[1], response => {
        let complete2 = '';
        response.on('error', err => console.log(err))
        response.setEncoding ('utf8')
        response.on('data', data => {
            complete2 += data
        })
        response.on('end', ()=> {
            console.log(complete2)
        })
        http.get (urls[2], response => {
            let complete3 = '';
            response.on('error', err => console.log(err))
            response.setEncoding ('utf8')
            response.on('data', data => {
                complete3 += data
            })
            response.on('end', ()=> {
                console.log(complete3)
            })
        })        
    })
})



