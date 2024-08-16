
const { stdout } = require('process')
var uno =require('./p')
var exec=require('child_process').exec

exec('dir',(err,stdout)=>{
    if(err)
        throw err
})
console,log("sus archivos son:")
console.log(stdout)