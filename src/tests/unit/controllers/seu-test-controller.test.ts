import { Request, Response } from 'express';
import * as sinon from 'sinon';
import chai from 'chai';
import CarController from '../../../controllers/CarController';
const { expect } = chai;
const controller = new CarController();
const request = {} as Request;
const response = {} as Response;

describe('Testa o controller Car', () => {
  describe('Se os dados estiverem corretos', () => {
    const payloadCar = {
      status: 201,
      response: {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      }
    }
  
    before(async () => {
      request.body = payloadCar.response
      response.status = sinon.stub().returns(200)
      response.json = sinon.stub().returns({ 

      })
      sinon
        .stub(controller.service, 'create')
        .resolves(payloadCar);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Retorna o status 200', async () => {
      const responseController = await controller.create(request, response)
      console.log(responseController);
      
      expect(response).to.be.status(201);
    });
  })
});
