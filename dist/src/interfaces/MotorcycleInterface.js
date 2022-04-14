"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorcycleSchema = void 0;
const zod_1 = require("zod");
const MotorcycleSchema = zod_1.z.object({
    category: zod_1.z.literal('Street')
        .or(zod_1.z.literal('Custom'))
        .or(zod_1.z.literal('Trail')),
    engineCapacity: zod_1.z.number({
        required_error: 'engineCapacity is required',
        invalid_type_error: 'engineCapacity must be a number',
    }).min(1, { message: 'engineCapacity cannot be less than 0' })
        .max(2500, { message: 'engineCapacity cannot be bigger than 7' }),
});
exports.MotorcycleSchema = MotorcycleSchema;
