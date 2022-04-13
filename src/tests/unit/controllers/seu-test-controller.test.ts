import { Request, Response } from 'express';
import Sinon, * as sinon from 'sinon';
import chai from 'chai';
import CarController from '../../../controllers/CarController';
const { expect } = chai;
const controller = new CarController();
const request = {} as Request;
const response = {} as Response;

describe('Test the CarController', () => {
  describe('method create', () => {
    describe('if success', () => {
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
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(controller.service, 'create')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 201', async () => {
        const respo = await controller.create(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(201))
      });
    });
    describe('if fails', () => {
      const payloadCar = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payloadCar.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(controller.service, 'create')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await controller.create(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
  describe('method read', () => {
    describe('if success', () => {
      const payloadCar = {
        status: 200,
        response: [
          {
            model: "Ferrari Maranello",
            year: 1963,
            color: "red",
            buyValue: 3500000,
            seatsQty: 2,
            doorsQty: 2,
          }
        ]
      }
    
      before(async () => {
        request.body = payloadCar.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(controller.service, 'read')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 200', async () => {
        await controller.read(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(200))
        expect((response.json as sinon.SinonStub).calledWith())
      });
    });
    describe('if fails', () => {
      const payloadCar = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payloadCar.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(controller.service, 'read')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await controller.read(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
  describe('method readOne', () => {
    describe('if success', () => {
      const payloadCar = {
        status: 200,
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
        request.params = {id: '123'}
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(controller.service, 'readOne')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 200', async () => {
        await controller.readOne(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(200))
        expect((response.json as sinon.SinonStub).calledWith())
      });
    });
    describe('if fails', () => {
      const payloadCar = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payloadCar.response
        request.params = {id: '123'}
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(controller.service, 'readOne')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await controller.readOne(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
});
