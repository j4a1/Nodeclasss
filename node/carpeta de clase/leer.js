/* var fs=require('fs')
var arc=fs.readFileSync('./')

fs.readdir('/',(err,File)=>{
    if(err){
        throw err
    }
    console.log(File)
}) */

fs.readFileSync('pp.txt','utf-8',(err,archivo)=>{
    if(err){
        throw err
    }
    console.log(archivo)
})