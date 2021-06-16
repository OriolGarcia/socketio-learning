//servidor express
const express = require('express');

const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
class Server{

        constructor(){
          
            this.app = express();
            this.port=process.env.PORT;

                //http Server
                this.server =http.createServer(this.app);
                //configuraciones socket
                this.io = socketio(this.server,{ /*Coniguraciones*/});
        }


configurarsSockets(){




    new Sockets(this.io);
}


middlewares(){


    this.app.use(express.static( path.resolve(__dirname , '../public')));



}

execute(){
    this.middlewares();
    this.configurarsSockets();
    //init server
    this.server.listen(this.port,()=>{

        console.log('server corriendo por el puerto:',this.port)
    });

}
  



}
module.exports = Server ; 