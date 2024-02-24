"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = __importDefault(require("../middleware/logger"));
const apiRouter = (0, express_1.Router)();
apiRouter.route('/')
    .post((req, res, next) => {
    (0, logger_1.default)(req, next);
    req.body
        ? res.status(200).send(`Accepted. Await data.\n${req.body}`)
        : res.status(400).send("No data to compute.");
});
exports.default = apiRouter;
