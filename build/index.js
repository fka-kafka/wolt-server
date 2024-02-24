"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const forbidenRoutes_1 = __importDefault(require("./routes/forbidenRoutes"));
const apiRoute_1 = __importDefault(require("./routes/apiRoute"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:5173');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', forbidenRoutes_1.default);
app.use('/api', apiRoute_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`);
});
