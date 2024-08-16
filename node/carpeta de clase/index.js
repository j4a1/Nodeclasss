/*var n=5
var m=15
console.log("El resultado de la suma es:"+(n+m))
console.log(`El resultado de la suma2 es: ${n+m}`)
console.log(`El resultado de la suma3 es: ${n==m}`)
console.log(`El resultado de la suma4 es: ${n<m}`)
console.log(__dirname) // se muestra la carpeta que se esta utilizando
console.log(__filename) */// se abre el archivo que se esta utilizando

/*function tome(h){
    var j=process.argv.indexOf(h)
    return process.argv[j+1]
}
var n=tome(`--nombre`)
var e=tome(`--edad`)
var m=tome(`correo`)
console.log(`su nombre es ${n}, y su edad es ${e} años ${m}, su correo es`)*/
/*process.stdin.on('data',function(data){
    process.stdout.write(data)
    process.exit()
})*/
var preguntas=['¿Nombre?','¿Edad?','¿Sexo?']
var respuestas=[]

function pre(i){
    process.stdout.write(preguntas[i])
    
}
process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim)
if(respuestas.length<preguntas.length){
    pre(respuestas.length)
}
else{
    process.stdout.write(`su nombre es: ${respuestas[0]}`)
    process.exit()
}
})

pre(0)