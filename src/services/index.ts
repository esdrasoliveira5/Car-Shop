import { Model } from '../interfaces/ModelInterface';
import {
  ResponseCreate,
  ResponseError,
  // ResponseDelete,
  // ResponseRead,
  // ResponseReadOne,
  // ResponseUpdate,
} from '../interfaces/ResponseInterfaces';

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}

abstract class Service<T> {
  protected error = ControllerErrors;

  constructor(protected model: Model<T>) {}

  abstract create(obj: T): Promise<ResponseCreate<T> | ResponseError>;

  // abstract read(): Promise<ResponseRead<T> | ResponseError>;

  // abstract readOne(id: string): Promise<ResponseReadOne<T> | ResponseError>;

  // abstract update(id: string, obj: T):
  // Promise<ResponseUpdate<T> | ResponseError>;

  // abstract delete(id:string): Promise<ResponseDelete<T> | ResponseError>;
}

export default Service;