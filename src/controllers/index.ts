import { Request, Response } from 'express';
import { RequestWithBody } from '../interfaces/RequestInterface';
import { Error } from '../interfaces/ResponseInterfaces';

import Service from '../services';

abstract class Controller<T> {
  abstract route: string;

  constructor(public service: Service<T>) {}

  abstract create(req: RequestWithBody<T>, res: Response<T | Error>):
  Promise<typeof res>;

  abstract read(req: Request, res: Response<T[] | Error>): Promise<typeof res>;

  abstract readOne(req: Request, res: Response<T | Error>): Promise<typeof res>;

  abstract update(req: RequestWithBody<T>, res: Response<T | Error>):
  Promise<typeof res>;

  abstract delete(req: Request, res: Response<[] | Error>): Promise<typeof res>;
}

export default Controller;