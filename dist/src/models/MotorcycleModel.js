"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MongoModel_1 = __importDefault(require("./MongoModel"));
const motorcycleSchema = new mongoose_1.Schema({
    model: String,
    year: Number,
    color: String,
    buyValue: Number,
    category: String,
    engineCapacity: Number,
}, { versionKey: false });
class MotorcycleModel extends MongoModel_1.default {
    constructor(model = (0, mongoose_1.model)('motorcycles', motorcycleSchema)) {
        super(model);
    }
}
exports.default = MotorcycleModel;
