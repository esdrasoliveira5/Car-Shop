import Service from '.';
import { Motorcycle } from '../interfaces/MotorcycleInterface';
import {
  ResponseCreate,
  ResponseDelete,
  ResponseError,
  ResponseRead,
  ResponseReadOne,
} from '../interfaces/ResponseInterfaces';
import MotorcycleModel from '../models/MotorcycleModel';

class MotorcycleService extends Service<Motorcycle> {
  constructor(model = new MotorcycleModel()) {
    super(model);
  }

  create = async (obj: Motorcycle):
  Promise<ResponseCreate<Motorcycle> | ResponseError> => {
    const validationVehicle = this.validation.vehicleValidations(obj);
    if (validationVehicle) return validationVehicle;

    const validationMotorcycle = this.validation.motorcycleValidations(obj);
    if (validationMotorcycle) return validationMotorcycle;

    const response = await this.model.create(obj);
    if (response === undefined) {
      return { status: this.validation.status.INTERNAL,
        response: { error: this.validation.error.internal } };
    }
    return { status: this.validation.status.CREATED, response };
  };

  read = async (): Promise<ResponseError | ResponseRead<Motorcycle>> => {
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
  Promise<ResponseError | ResponseReadOne<Motorcycle>> => {
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

  update = async (id: string, obj: Motorcycle):
  Promise<ResponseCreate<Motorcycle> | ResponseError> => {
    const validationVehicle = this.validation.vehicleValidations(obj);
    if (validationVehicle) return validationVehicle;

    const validationMotorcycle = this.validation.motorcycleValidations(obj);
    if (validationMotorcycle) return validationMotorcycle;

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

export default MotorcycleService;