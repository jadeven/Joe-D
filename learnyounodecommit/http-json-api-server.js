const http = require('http')
const url = require('url')
let myPort = process.argv[2]
//return json with hour, minute, and second only
//return UNIX epoch time
let server = http.createServer(function callback(request, response) {
    let myPath = new URL(`http://localhost:${myPort}${request.url}`)
    // console.log('this is request' + request.url)
    // console.log('this is my path '+ myPath)
    if (request.method === 'GET') {
        if (myPath.pathname === '/api/parsetime') {
            let myDate = new Date(myPath.searchParams.get('iso'))
            let output = {
                "hour": myDate.getHours(),
                "minute": myDate.getMinutes(),
                "second": myDate.getSeconds(),
            }
            let jsonString = JSON.stringify(output)
            response.end(jsonString)
        }
    }
})
server.listen(myPort)