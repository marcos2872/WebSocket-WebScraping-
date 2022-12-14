/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express'
import route from './routers';
import http from 'http';
const { Server } = require("socket.io");
import { scraping } from "./Scraping";
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const toExactMinute = 30000 - (new Date().getTime() % 30000);
const PORT = process.env.PORT || 3333

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

server.listen(PORT, () => console.log('server running on port 3333'))