import { Request, Response } from 'express';
import Controller from '.';
import CarService from '../services/CarService';
import { Car } from '../interfaces/CarInterface';

class CarController extends Controller<Car> {
  private _route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (req: Request, res: Response): Promise<typeof res> => {
    const { body } = req;

    const { status, response } = await this.service.create(body);

    return res.status(status).json(response);
  };

  read = async (_req: Request, res: Response): Promise<typeof res> => {
    const { status, response } = await this.service.read();

    return res.status(status).json(response);
  };
}

export default CarController;