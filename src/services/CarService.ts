import Service from '.';
import { Car, CarSchema } from '../interfaces/CarInterface';
import {
  ResponseCreate,
  ResponseError,
} from '../interfaces/ResponseInterfaces';
import CarModel from '../models/CarModel';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car):
  Promise<ResponseCreate<Car> | ResponseError> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { status: 400, response: { error: parsed.error } };
    }
    const response = await this.model.create(obj);
    if (response === null) {
      return { status: 500, response: { error: this.error.internal } };
    }
    return { status: 201, response };
  };
}

export default CarService;