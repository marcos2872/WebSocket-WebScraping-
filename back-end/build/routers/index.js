"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Scraping_1 = require("../Scraping");
// import io from "../server";
const route = (0, express_1.Router)();
route.get('/', async (_req, res) => {
    const re = await (0, Scraping_1.scraping)();
    res.json(re);
});
exports.default = route;
