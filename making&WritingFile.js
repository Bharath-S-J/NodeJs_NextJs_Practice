const fs = require('fs')

function creatFile(name,content){
    fs.writeFileSync(name, content)
    console.log('File written')
}

module.exports ={
    creatFile
}