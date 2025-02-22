import WebSocket, { WebSocketServer } from 'ws';
import { prismaClient } from 'db/client'

const wss = new WebSocketServer({ port: 8000 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    prismaClient.user.create({
      data: {
        username: Math.random().toString(36).substring(7),
        password: Math.random().toString(36).substring(7),
    
      },

    }),
      ws.send(message); 
  });
}); 