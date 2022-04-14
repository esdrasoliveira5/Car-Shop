"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validations_1 = __importDefault(require("../validations/Validations"));
class Service {
    constructor(model) {
        this.model = model;
        this.validation = new Validations_1.default();
    }
}
exports.default = Service;
