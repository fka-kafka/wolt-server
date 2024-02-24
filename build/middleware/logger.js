"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const uuid_1 = require("uuid");
const fs_1 = require("fs");
const path_1 = require("path");
const logger = (req, next) => {
    const now = (0, moment_1.default)().format('ddd MMM Do,HH:mm:SS (ZZ)');
    const uuid = (0, uuid_1.v4)();
    const filename = (0, path_1.join)(process.cwd(), 'server', 'logs', 'logs.txt');
    const log = `${uuid} : Server accessed on ${now.split(',')[0]} at ${now.split(',')[1]}. Method: ${req.method}\n`;
    (0, fs_1.appendFile)(filename, log, 'utf8', () => console.log('Check logs'));
    next();
};
exports.default = logger;
