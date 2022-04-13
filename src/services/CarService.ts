import Service from '.';
import { Car, CarSchema } from '../interfaces/CarInterface';
import {
  ResponseCreate,
  ResponseError,
  ResponseRead,
  ResponseReadOne,
} from '../interfaces/ResponseInterfaces';
import { VehicleSchema } from '../interfaces/VehicleInterface';
import CarModel from '../models/CarModel';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<ResponseCreate<Car> | ResponseError> => {
    const parsedC = CarSchema.safeParse(obj);
    const parsedV = VehicleSchema.safeParse(obj);
    if (!parsedC.success) {
      return {
        status: this.status.BAD_REQUEST, response: { error: parsedC.error },
      };
    }
    if (!parsedV.success) {
      return {
        status: this.status.BAD_REQUEST, response: { error: parsedV.error },
      };
    }
    const response = await this.model.create(obj);
    if (response === undefined) {
      return { status: this.status.INTERNAL,
        response: { error: this.error.internal } };
    }
    return { status: this.status.CREATED, response };
  };

  read = async (): Promise<ResponseError | ResponseRead<Car>> => {
    const response = await this.model.read();
    if (response === undefined) {
      return {
        status: this.status.INTERNAL,
        response: { error: this.error.internal },
      };
    }
    return { status: this.status.OK, response };
  };

  readOne = async (id: string):
  Promise<ResponseError | ResponseReadOne<Car>> => {
    if (id.length < 24) {
      return {
        status: this.status.BAD_REQUEST,
        response: { error: 'Id must have 24 hexadecimal characters' },
      };
    }
    
    const response = await this.model.readOne(id);
    if (response === null) {
      return { 
        status: this.status.NOT_FOUND,
        response: { error: this.error.notFound },
      };
    }
    return { status: this.status.OK, response };
  };
}

export default CarService;