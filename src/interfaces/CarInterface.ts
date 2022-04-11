import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const CarSchema = z.object({
  doorsQty: z.number({
    required_error: 'doorsQty is required',
    invalid_type_error: 'doorsQty must be a number',
  }).min(2, { message: 'doorsQty cannot be less than 2' })
    .max(4, { message: 'doorsQty cannot be bigger than 4' }),
  seatsQty: z.number({
    required_error: 'seatsQty is required',
    invalid_type_error: 'seatsQty must be a number',
  }).min(2, { message: 'seatsQty cannot be less than 2' })
    .max(7, { message: 'seatsQty cannot be bigger than 7' }),
});

export type Car = Vehicle & z.infer<typeof CarSchema>;

export { CarSchema };