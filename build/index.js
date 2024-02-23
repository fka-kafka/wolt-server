"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const HOST = {
    port: 3500,
    hostname: 'localhost'
};
const server = http.createServer((req, res) => {
    console.log("Connecton made.\n");
    if (req.method === 'POST') {
        console.log("Calculation request made.\n");
        res.writeHead(202, "Accepted. Await data.");
    }
    else {
        console.log("Forbidden method.\n");
        res.writeHead(406, 'Not acceptable.');
        const msg = "This is a single POST server.\nOther methods forbidden.";
        res.write(msg);
    }
    res.end();
});
server.listen(HOST.port, HOST.hostname, () => {
    console.log(`\nServer listening on http://${HOST.hostname}:${HOST.port}/\n`);
});
