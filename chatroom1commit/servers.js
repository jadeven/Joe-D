const http = require('http')
const url = require('url')
const myPort = 4000
const fs = require('fs')
const { parse } = require('querystring');

let server = http.createServer(function (req,res){
    // console.log('this is url' + req.url)
    // console.log('this is rq:' + req.method)
    if (req.method === 'GET'){
        if (req.url === '/messages'){
            // console.log('hello')
            fs.readFile('C:\\Users\\18082\\Desktop\\python\\class\\week2\\webchatroom\\dummy.txt', function (err,data){
                if (err){
                    console.log(err)
                }
                const dummyRead = data.toString().split('\n')
                console.log(dummyRead)
                for (let i= 0; i<dummyRead.length; i++){
                    if ( i !== dummyRead.length - 1){
                        let test = dummyRead[i]
                        let newer = test.split(',')
                        console.log(newer[0])
                        console.log(newer[1])
                        console.log(newer[2])

    
                    }
                }
                return res.end(dummyRead.join('\n'))
            })
            // console.log(dummyRead)
            
        }
    }
    else if (req.method === 'POST') {
        // console.log('this is rq:' + req)
        // console.log('post works')
        let body = '';
        req.on('data', chunk => {

            // console.log('this is chunk: '+ chunk.toString())
            body +=  chunk.toString(); // convert Buffer to string
            // console.log('this is body' + body)

        });
        req.on('end', () => {
            // console.log( parse(finished));

            let date = new Date()
            body += ',' + date + ('\n')
            fs.writeFile('dummy.txt', body, {'flag':'a'}, function (err) {
                if (err) return console.log(err);
                // console.log(body + 'is saved to file')
                // console.log(fs.readFileSync("dummy.txt", "utf8"));
                return res.end('we did what you needed')

              });

        });
    }
    else {
        res.end('request method must be GET or POST')
    }

})

server.listen(myPort)

if (server.listening){
    console.log('server up')
}