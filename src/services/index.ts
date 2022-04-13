import { Model } from '../interfaces/ModelInterface';
import {
  ResponseCreate,
  ResponseError,
  ResponseRead,
  ResponseReadOne,
  ResponseDelete,
  ResponseUpdate,
} from '../interfaces/ResponseInterfaces';
import Validations from '../validations/Validations';

abstract class Service<T> {
  protected validation = new Validations();

  constructor(public model: Model<T>) {}

  abstract create(obj: T): Promise<ResponseCreate<T> | ResponseError>;

  abstract read(): Promise<ResponseRead<T> | ResponseError>;

  abstract readOne(id: string): Promise<ResponseReadOne<T> | ResponseError>;

  abstract update(id: string, obj: T):
  Promise<ResponseUpdate<T> | ResponseError>;

  abstract delete(id:string): Promise<ResponseDelete | ResponseError>;
}

export default Service;