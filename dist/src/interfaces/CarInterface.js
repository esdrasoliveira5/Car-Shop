"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSchema = void 0;
const zod_1 = require("zod");
const CarSchema = zod_1.z.object({
    doorsQty: zod_1.z.number({
        required_error: 'doorsQty is required',
        invalid_type_error: 'doorsQty must be a number',
    }).min(2, { message: 'doorsQty cannot be less than 2' })
        .max(4, { message: 'doorsQty cannot be bigger than 4' }),
    seatsQty: zod_1.z.number({
        required_error: 'seatsQty is required',
        invalid_type_error: 'seatsQty must be a number',
    }).min(2, { message: 'seatsQty cannot be less than 2' })
        .max(7, { message: 'seatsQty cannot be bigger than 7' }),
});
exports.CarSchema = CarSchema;
