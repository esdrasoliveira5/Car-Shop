"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./connection"));
const handleError_1 = __importDefault(require("./middlewares/handleError"));
class App {
    constructor() {
        this.handleError = new handleError_1.default();
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
    }
    startServer(PORT = 3001) {
        (0, connection_1.default)();
        this.app.listen(PORT, () => console.log(`Server running here 👉 http://localhost:${PORT}`));
    }
    addRouter(router) {
        this.app.use(router);
        this.app.use(this.handleError.genericError);
    }
    getApp() {
        return this.app;
    }
}
exports.default = App;
