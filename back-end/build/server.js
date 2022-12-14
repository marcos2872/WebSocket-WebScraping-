"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const http_1 = __importDefault(require("http"));
const { Server } = require("socket.io");
const Scraping_1 = require("./Scraping");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new Server(server);
const toExactMinute = 30000 - (new Date().getTime() % 30000);
const PORT = process.env.PORT || 3333;
app.use(express_1.default.json());
app.use(routers_1.default);
io.on('connection', async () => {
    const data = await (0, Scraping_1.scraping)();
    io.emit('', data);
});
setTimeout(function () {
    setInterval(async () => {
        const newdata = await (0, Scraping_1.scraping)();
        console.log('newdata');
        io.emit('', newdata);
    }, 30000);
}, toExactMinute);
server.listen(PORT, () => console.log('server running on port 3333'));
