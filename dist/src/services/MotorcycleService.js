"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const MotorcycleModel_1 = __importDefault(require("../models/MotorcycleModel"));
class MotorcycleService extends _1.default {
    constructor(model = new MotorcycleModel_1.default()) {
        super(model);
        this.create = async (obj) => {
            const validationVehicle = this.validation.vehicleValidations(obj);
            if (validationVehicle)
                return validationVehicle;
            const validationMotorcycle = this.validation.motorcycleValidations(obj);
            if (validationMotorcycle)
                return validationMotorcycle;
            const response = await this.model.create(obj);
            if (response === undefined) {
                return { status: this.validation.status.INTERNAL,
                    response: { error: this.validation.error.internal } };
            }
            return { status: this.validation.status.CREATED, response };
        };
        this.read = async () => {
            const response = await this.model.read();
            if (response === undefined) {
                return {
                    status: this.validation.status.INTERNAL,
                    response: { error: this.validation.error.internal },
                };
            }
            return { status: this.validation.status.OK, response };
        };
        this.readOne = async (id) => {
            const validationId = this.validation.idValidations(id);
            if (validationId)
                return validationId;
            const response = await this.model.readOne(id);
            if (response === null) {
                return {
                    status: this.validation.status.NOT_FOUND,
                    response: { error: this.validation.error.notFound },
                };
            }
            return { status: this.validation.status.OK, response };
        };
        this.update = async (id, obj) => {
            const validationVehicle = this.validation.vehicleValidations(obj);
            if (validationVehicle)
                return validationVehicle;
            const validationMotorcycle = this.validation.motorcycleValidations(obj);
            if (validationMotorcycle)
                return validationMotorcycle;
            const validationId = this.validation.idValidations(id);
            if (validationId)
                return validationId;
            const response = await this.model.update(id, obj);
            if (response === null) {
                return {
                    status: this.validation.status.NOT_FOUND,
                    response: { error: this.validation.error.notFound },
                };
            }
            return { status: this.validation.status.OK, response };
        };
        this.delete = async (id) => {
            const validationId = this.validation.idValidations(id);
            if (validationId)
                return validationId;
            const response = await this.model.delete(id);
            if (response === null) {
                return {
                    status: this.validation.status.NOT_FOUND,
                    response: { error: this.validation.error.notFound },
                };
            }
            return { status: this.validation.status.NO_CONTENT, response: [] };
        };
    }
}
exports.default = MotorcycleService;
