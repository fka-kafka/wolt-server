"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = __importDefault(require("../middleware/logger"));
const computeModule_1 = __importDefault(require("../api/computeModule"));
const apiRouter = (0, express_1.Router)();
apiRouter.route('/')
    .post((req, res, next) => {
    (0, logger_1.default)(req, next);
    req.body
        ? res.status(200).send(`Accepted. Await data.\n`)
        : res.status(400).send("No data to compute.");
    const data = req.body;
    const day = new Date(`${data.time}`).toLocaleDateString('en-GB', { weekday: 'long' });
    const time = new Date(`${data.time}`).getHours();
    const result = (0, computeModule_1.default)(~~data.cartValue, ~~data.distance, ~~data.items, day, time);
    console.log(result);
});
exports.default = apiRouter;
