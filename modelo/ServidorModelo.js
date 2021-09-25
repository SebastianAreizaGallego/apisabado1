const express = require('express')

class ServidorModelo{

constructor(){

   this.app = express()
   this.enrutarPeticiones()


}

encenderServidor(){

    this.app.listen(process.env.PUERTO,function(){
        console.log("servidor encendido.... "+process.env.PUERTO);
    })

}

enrutarPeticiones(){

    this.app.get('/avanzada/v1/jugadores', function (req, res) {
        res.send('peticion de tipo GET (BUSCAR TODOS LOS JUGADORES)')
        })
    this.app.get('/avanzada/v1/jugadores', function (req, res) {
            res.send('peticion de tipo GET (BUSCAR UN JUGADOR)')
            })
    
        
    this.app.post('/avanzada/v1/jugadores', function (req, res) {
                res.send('peticion de tipo post (INSERTAR)')
            })
    
    this.app.put('/avanzada/v1/jugadores/id', function (req, res) {
                res.send('peticion de tipo put (EDITAR)')
            })
    
    this.app.delete('/avanzada/v1/jugadores/id', function (req, res) {
                res.send('peticion de tipo delete (ELIMINAR)')
            })
    
    


}

conectarBD(){


}


}

module.exports=ServidorModelo