/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express'
import route from './routers';
import http from 'http';
const { Server } = require("socket.io");
import { scraping } from "./Scraping";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const toExactMinute = 30000 - (new Date().getTime() % 30000);

app.use(express.json())

app.use(route)

io.on('connection', async () => {
  const data = await scraping()
  io.emit('', data)
});

setTimeout(function() {
  setInterval(async () => {
    const newdata = await scraping()
      console.log('newdata');
      io.emit('', newdata)
  }, 30000);
}, toExactMinute);

server.listen(3333, () => console.log('server running on port 3333'))