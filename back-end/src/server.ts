/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express'
import route from './routers';
import http from 'http';
const { Server } = require("socket.io");
import { scraping } from "./Scraping";

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.json())

app.use(route)

io.on('connection', (socket: any) => {
  socket.on('update-data', async () => {
    const data = await scraping()
    io.emit('update-data', data)
  })
  
})

server.listen(3333, () => console.log('server running on port 3333'))

export default io;