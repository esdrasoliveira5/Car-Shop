"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleSchema = void 0;
const zod_1 = require("zod");
const VehicleSchema = zod_1.z.object({
    model: zod_1.z.string({
        required_error: 'Model is required',
        invalid_type_error: 'Model must be a string',
    }).min(3, { message: 'Model must be 3 or more characters long' }),
    year: zod_1.z.number({
        required_error: 'Year is required',
        invalid_type_error: 'Year must be a number',
    }).min(1900, { message: 'Year cannot be less than 1900' })
        .max(2022, { message: 'Year cannot be bigger than 2022' }),
    color: zod_1.z.string({
        required_error: 'Color is required',
        invalid_type_error: 'Color must be a string',
    }).min(3, { message: 'Color must be 3 or more characters long' }),
    status: zod_1.z.boolean({
        invalid_type_error: 'Status must be a string',
    }).optional(),
    buyValue: zod_1.z.number({
        required_error: 'buyValue is required',
        invalid_type_error: 'buyValue must be a number',
    }).int({ message: 'ButValue must be integer' }),
});
exports.VehicleSchema = VehicleSchema;
