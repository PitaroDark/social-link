"use strict";
import { Server as SocketServer } from "socket.io";

class Socket {
  
  io;

  constructor() {
    this.io = undefined;
  }

  addServer = (server) => {
    this.io = new SocketServer(server, {
      cors: {
        origin: `*`,
        methods: [`GET`, `POST`, `PATCH`, `DELETE`],
      },
    });
  };

  initOperations = () => {
    
    this.io.on("connection", (socket) => {
      //CONNECTED
      console.log(`Socket connected: ${socket.id}`);
      socket.on("disconnect", () => {
        //DISCONNECTED
        console.log(`Socket disconnected: ${socket.id}`);
      });
    });

    this.io.on("error", (error) => {
      //ERROR
      console.log(`Socket error: ${error}`);
    });

    this.io.on("message", (message) => {
      //MESSAGE
      console.log(`Socket message: ${message}`);
      this.io.broadcast.emit("message", message);
    });
  }

  getServer = () => {
    return this.io;
  };

}

const socket = new Socket();

export default socket;
