"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarInterface_1 = require("../interfaces/CarInterface");
const MotorcycleInterface_1 = require("../interfaces/MotorcycleInterface");
const VehicleInterface_1 = require("../interfaces/VehicleInterface");
var MesageErrors;
(function (MesageErrors) {
    MesageErrors["internal"] = "Internal Server Error";
    MesageErrors["notFound"] = "Object not found";
    MesageErrors["requiredId"] = "Id is required";
    MesageErrors["badRequest"] = "Bad request";
})(MesageErrors || (MesageErrors = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["NO_CONTENT"] = 204] = "NO_CONTENT";
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCodes[StatusCodes["INVALID"] = 422] = "INVALID";
    StatusCodes[StatusCodes["INTERNAL"] = 500] = "INTERNAL";
})(StatusCodes || (StatusCodes = {}));
class Validations {
    constructor() {
        this.error = MesageErrors;
        this.status = StatusCodes;
        this.vehicleValidations = (obj) => {
            const parsedVehicle = VehicleInterface_1.VehicleSchema.safeParse(obj);
            if (!parsedVehicle.success) {
                return {
                    status: this.status.BAD_REQUEST,
                    response: { error: parsedVehicle.error },
                };
            }
        };
        this.carValidations = (obj) => {
            const vehicleValidations = this.vehicleValidations(obj);
            if (vehicleValidations)
                return vehicleValidations;
            const parsedCar = CarInterface_1.CarSchema.safeParse(obj);
            if (!parsedCar.success) {
                return {
                    status: this.status.BAD_REQUEST,
                    response: { error: parsedCar.error },
                };
            }
        };
        this.motorcycleValidations = (obj) => {
            const vehicleValidations = this.vehicleValidations(obj);
            if (vehicleValidations)
                return vehicleValidations;
            const parsedMotorcycle = MotorcycleInterface_1.MotorcycleSchema.safeParse(obj);
            if (!parsedMotorcycle.success) {
                return {
                    status: this.status.BAD_REQUEST,
                    response: { error: parsedMotorcycle.error },
                };
            }
        };
        this.idValidations = (id) => {
            if (id.length < 24) {
                return {
                    status: this.status.BAD_REQUEST,
                    response: { error: 'Id must have 24 hexadecimal characters' },
                };
            }
        };
    }
}
exports.default = Validations;
