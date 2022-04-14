import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const MotorcycleSchema = z.object({
  category: z.literal('Street')
    .or(z.literal('Custom'))
    .or(z.literal('Trail')),
  engineCapacity: z.number({
    required_error: 'engineCapacity is required',
    invalid_type_error: 'engineCapacity must be a number',
  }).min(1, { message: 'engineCapacity cannot be less than 0' })
    .max(2500, { message: 'engineCapacity cannot be bigger than 7' }),
});

export type Motorcycle = Vehicle & z.infer<typeof MotorcycleSchema>;

export { MotorcycleSchema };
