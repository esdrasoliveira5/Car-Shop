"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const MotorcycleService_1 = __importDefault(require("../services/MotorcycleService"));
class MotorcycleController extends _1.default {
    constructor(service = new MotorcycleService_1.default(), route = '/motorcycles') {
        super(service);
        this.create = async (req, res) => {
            const { body } = req;
            const { status, response } = await this.service.create(body);
            return res.status(status).json(response);
        };
        this.read = async (_req, res) => {
            const { status, response } = await this.service.read();
            return res.status(status).json(response);
        };
        this.readOne = async (req, res) => {
            const { id } = req.params;
            const { status, response } = await this.service.readOne(id);
            return res.status(status).json(response);
        };
        this.update = async (req, res) => {
            const { id } = req.params;
            const { body } = req;
            const { status, response } = await this.service.update(id, body);
            return res.status(status).json(response);
        };
        this.delete = async (req, res) => {
            const { id } = req.params;
            const { status, response } = await this.service.delete(id);
            return res.status(status).json(response);
        };
        this._route = route;
    }
    get route() { return this._route; }
}
exports.default = MotorcycleController;
