"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MongoModel_1 = __importDefault(require("./MongoModel"));
const carSchema = new mongoose_1.Schema({
    model: String,
    year: Number,
    color: String,
    buyValue: Number,
    seatsQty: Number,
    doorsQty: Number,
}, { versionKey: false });
class CarModel extends MongoModel_1.default {
    constructor(model = (0, mongoose_1.model)('cars', carSchema)) {
        super(model);
    }
}
exports.default = CarModel;
