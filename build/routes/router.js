"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = __importDefault(require("../middleware/logger"));
const router = (0, express_1.Router)();
router.route('/')
    .post((req, res, next) => {
    (0, logger_1.default)(req, next);
    res.status(406).send(`Request body not found.`);
})
    .get((req, res, next) => {
    (0, logger_1.default)(req, next);
    res.status(405).send(`This is a single POST endpoint server.\nOther methods forbidden.`);
})
    .put((req, res, next) => {
    (0, logger_1.default)(req, next);
    res.status(405).send(`This is a single POST endpoint server.\nOther methods forbidden.`);
})
    .delete((req, res, next) => {
    (0, logger_1.default)(req, next);
    res.status(405).send(`This is a single POST endpoint server.\nOther methods forbidden.`);
});
router.route('api/')
    .post((req, res, next) => {
    (0, logger_1.default)(req, next);
    req.body
        ? res.status(200).send("Accepted. Await data.")
        : res.status(400).send("No data to compute.");
});
exports.default = router;
