/* var util=require('util')
var readline=require('readline')
var rl=readline.createInterface(process.stdin,process.stdout)
k=0
var Persona={
    Nombre:"",
    Datos:[]
    
}

function setear (num){
    var nombres=["a","b","c","d","e"]
    rl.setPrompt(`ingrese su ${nombres[num]}:`)
    rl.prompt()
}


rl.question('Nombre: ',(res)=>{
    Persona.Nombre=res
    setear(0)
})


rl.on('line',(entrada)=>{
    Persona.Datos.push(entrada)
 
    k+=1
    setear(k)
    //rl.prompt()
    if(Persona.Datos.length>4){
        console.log(util.format("su Nombre es %s y sus datos son &j",Persona.Nombre,Persona.Datos))
        process.exit()
    }
})

 */


/* var events=require('events')
var emmiter=new events.EventEmitter()

emmiter.on(`l`,(res)=>{
console.log(res)

})
emmiter.emit('l',"vamos falcao") */

var events=require('events')
var util=require('util')

var Persona=function(nombre){
    this.nombre=nombre
}
util.inherits(persona,events)

var una=new persona("OPM")

una.on('nose', (res) =>{
    console.log(`${una.nombre}:${res}`)
})
una.emit('nose',"hola")

module.exports=Persona,una
