import { Request, Response } from 'express';

import Service from '../services';

abstract class Controller<T> {
  abstract route: string;

  constructor(public service: Service<T>) {}

  abstract create(req: Request, res: Response): Promise<typeof res>;

  abstract read(req: Request, res: Response): Promise<typeof res>;
}

export default Controller;