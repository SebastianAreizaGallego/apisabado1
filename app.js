//se trae el modelo del servidor
const ServidorModelo=require('./modelo/ServidorModelo.js')

//se trae el dotenv
require('dotenv').config()

//puedo personalizar el servidor
const servidorJugadores=new ServidorModelo()

//encender el servidor
servidorJugadores.encenderServidor()
