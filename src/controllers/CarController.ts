import { Request, Response } from 'express';
import Controller from '.';
import CarService from '../services/CarService';
import { Car } from '../interfaces/CarInterface';
import { RequestWithBody } from '../interfaces/RequestInterface';
import { Error } from '../interfaces/ResponseInterfaces';

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

  create = async (req: RequestWithBody<Car>, res: Response<Car | Error>):
  Promise<typeof res> => {
    const { body } = req;
    
    const { status, response } = await this.service.create(body);

    return res.status(status).json(response);
  };

  read = async (_req: Request, res: Response<Car[] | Error>):
  Promise<typeof res> => {
    const { status, response } = await this.service.read();
    
    return res.status(status).json(response);
  };

  readOne = async (req: Request, res: Response<Car | Error>):
  Promise<typeof res> => {
    const { id } = req.params;
    
    const { status, response } = await this.service.readOne(id);

    return res.status(status).json(response);
  };

  update = async (req: RequestWithBody<Car>, res: Response<Car | Error>):
  Promise<typeof res> => {
    const { id } = req.params;
    const { body } = req;

    const { status, response } = await this.service.update(id, body);

    return res.status(status).json(response);
  };

  delete = async (req: Request, res: Response<[] | Error>):
  Promise<typeof res> => {
    const { id } = req.params;
    
    const { status, response } = await this.service.delete(id);

    return res.status(status).json(response);
  };
}

export default CarController;