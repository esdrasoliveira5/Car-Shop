"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = __importDefault(require("./routes/Router"));
const app_1 = __importDefault(require("./app"));
const CarController_1 = __importDefault(require("./controllers/CarController"));
const MotorcycleController_1 = __importDefault(require("./controllers/MotorcycleController"));
const server = new app_1.default();
const carController = new CarController_1.default();
const motorcycleController = new MotorcycleController_1.default();
const carRouter = new Router_1.default();
const motorcycleRouter = new Router_1.default();
carRouter.addRoute(carController);
motorcycleRouter.addRoute(motorcycleController);
server.addRouter(carRouter.router);
server.addRouter(motorcycleRouter.router);
exports.default = server;
