import { Car, CarSchema } from '../interfaces/CarInterface';
import { ResponseError } from '../interfaces/ResponseInterfaces';
import { VehicleSchema } from '../interfaces/VehicleInterface';

enum MesageErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}

enum StatusCodes {
  OK = 200,
  CREATED,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED,
  NOT_FOUND = 404,
  INVALID = 422,
  INTERNAL = 500,
}

class Validations {
  public error = MesageErrors;

  public status = StatusCodes;

  vehicleValidations = (obj: Car): void | ResponseError => {
    const parsedVehicle = VehicleSchema.safeParse(obj);
    if (!parsedVehicle.success) {
      return {
        status: this.status.BAD_REQUEST,
        response: { error: parsedVehicle.error },
      };
    }
  };

  carValidations = (obj: Car): void | ResponseError => {
    const vehicleValidations = this.vehicleValidations(obj);
    if (vehicleValidations) return vehicleValidations;

    const parsedCar = CarSchema.safeParse(obj);
    if (!parsedCar.success) {
      return {
        status: this.status.BAD_REQUEST,
        response: { error: parsedCar.error },
      };
    }
  };

  idValidations = (id: string): void | ResponseError => {
    if (id.length < 24) {
      return {
        status: this.status.BAD_REQUEST,
        response: { error: 'Id must have 24 hexadecimal characters' },
      };
    }
  };
}
export default Validations;
