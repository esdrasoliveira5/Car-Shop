import { Model } from '../interfaces/ModelInterface';
import {
  ResponseCreate,
  ResponseError,
  ResponseRead,
  ResponseReadOne,
  // ResponseDelete,
  // ResponseUpdate,
} from '../interfaces/ResponseInterfaces';

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

abstract class Service<T> {
  protected error = MesageErrors;

  protected status = StatusCodes;

  constructor(public model: Model<T>) {}

  abstract create(obj: T): Promise<ResponseCreate<T> | ResponseError>;

  abstract read(): Promise<ResponseRead<T> | ResponseError>;

  abstract readOne(id: string): Promise<ResponseReadOne<T> | ResponseError>;

  // abstract update(id: string, obj: T):
  // Promise<ResponseUpdate<T> | ResponseError>;

  // abstract delete(id:string): Promise<ResponseDelete<T> | ResponseError>;
}

export default Service;