import Service from '.';
import { Car } from '../interfaces/CarInterface';
import {
  ResponseCreate,
  ResponseDelete,
  ResponseError,
  ResponseRead,
  ResponseReadOne,
} from '../interfaces/ResponseInterfaces';
import CarModel from '../models/CarModel';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<ResponseCreate<Car> | ResponseError> => {
    const validationVehicle = this.validation.vehicleValidations(obj);
    if (validationVehicle) return validationVehicle;

    const validationCar = this.validation.carValidations(obj);
    if (validationCar) return validationCar;

    const response = await this.model.create(obj);
    if (response === undefined) {
      return { status: this.validation.status.INTERNAL,
        response: { error: this.validation.error.internal } };
    }
    return { status: this.validation.status.CREATED, response };
  };

  read = async (): Promise<ResponseError | ResponseRead<Car>> => {
    const response = await this.model.read();
    if (response === undefined) {
      return {
        status: this.validation.status.INTERNAL,
        response: { error: this.validation.error.internal },
      };
    }
    return { status: this.validation.status.OK, response };
  };

  readOne = async (id: string):
  Promise<ResponseError | ResponseReadOne<Car>> => {
    const validationId = this.validation.idValidations(id);
    if (validationId) return validationId;

    const response = await this.model.readOne(id);
    if (response === null) {
      return { 
        status: this.validation.status.NOT_FOUND,
        response: { error: this.validation.error.notFound },
      };
    }
    return { status: this.validation.status.OK, response };
  };

  update = async (id: string, obj: Car):
  Promise<ResponseCreate<Car> | ResponseError> => {
    const validationVehicle = this.validation.vehicleValidations(obj);
    if (validationVehicle) return validationVehicle;

    const validationCar = this.validation.carValidations(obj);
    if (validationCar) return validationCar;

    const validationId = this.validation.idValidations(id);
    if (validationId) return validationId;

    const response = await this.model.update(id, obj);
    if (response === null) {
      return {
        status: this.validation.status.NOT_FOUND,
        response: { error: this.validation.error.notFound },
      };
    }
    return { status: this.validation.status.OK, response };
  };

  delete = async (id: string):
  Promise<ResponseError | ResponseDelete> => {
    const validationId = this.validation.idValidations(id);
    if (validationId) return validationId;

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

export default CarService;