const fs = require('fs')
const path = require('path')

// const ext = '.' + process.argv[3]

 module.exports= (dir, ext, callback) =>{
    ext =`.${ext}`;
    fs.readdir(dir, (err, list)=> {
        if(err) return callback (err);
        const filtered = list.filter(file => path.extname(file) === ext)
        return callback (null, filtered)
    })
}

// let dakine = fs.readdir(process.argv[2], process.argv[3], function (err, data){
//     if (err){
//         return console.log(err)
//     }
//     data.filter(file => path.extname(file) === ext).forEach(file => console.log(file))
// })

// module.exports = dakine