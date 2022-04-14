import { Request, Response } from 'express';
import Sinon, * as sinon from 'sinon';
import chai from 'chai';
import CarController from '../../../controllers/CarController';
import MotorcycleController from '../../../controllers/MotorcycleController';
import { Motorcycle } from '../../../interfaces/MotorcycleInterface';
import { ResponseCreate, ResponseRead, ResponseReadOne, ResponseUpdate } from '../../../interfaces/ResponseInterfaces';
const { expect } = chai;
const carController = new CarController();
const motorcycleController = new MotorcycleController();
const request = {} as Request;
const response = {} as Response;

describe('1 - Test the CarController', () => {
  describe('1.1 - method create', () => {
    describe('if success', () => {
      const payload = {
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
        request.body = payload.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(carController.service, 'create')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 201', async () => {
        const respo = await carController.create(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(201))
      });
    });
    describe('if fails', () => {
      const payload = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payload.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(carController.service, 'create')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await carController.create(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
  describe('1.2 - method read', () => {
    describe('if success', () => {
      const payload = {
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
        request.body = payload.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(carController.service, 'read')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 200', async () => {
        await carController.read(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(200))
        expect((response.json as sinon.SinonStub).calledWith())
      });
    });
    describe('if fails', () => {
      const payload = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payload.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(carController.service, 'read')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await carController.read(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
  describe('1.3 - method readOne', () => {
    describe('if success', () => {
      const payload = {
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
        request.body = payload.response
        request.params = {id: '123'}
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(carController.service, 'readOne')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 200', async () => {
        await carController.readOne(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(200))
        expect((response.json as sinon.SinonStub).calledWith())
      });
    });
    describe('if fails', () => {
      const payload = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payload.response
        request.params = {id: '123'}
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(carController.service, 'readOne')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await carController.readOne(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
  describe('1.4 - method update', () => {
    describe('if success', () => {
      const payload = {
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
        request.body = payload.response
        request.params = {id: '123'}
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(carController.service, 'update')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 200', async () => {
        await carController.update(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(200))
        expect((response.json as sinon.SinonStub).calledWith())
      });
    });
    describe('if fails', () => {
      const payload = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payload.response
        request.params = {id: '123'}
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(carController.service, 'update')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await carController.update(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
});


describe('6 - Test the motorcycleController', () => {
  describe('6.1 - method create', () => {
    describe('if success', () => {
      const payload = {
        status: 201,
        response: {
          model: "Honda CG Titan 125",
          year: 1963,
          color: "red",
          buyValue: 3500,
          category: "Street",
          engineCapacity: 125,
          _id: '6254c0411954dcc064d02fd1'
        }
      }
    
      before(async () => {
        request.body = payload.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(motorcycleController.service, 'create')
          .resolves(payload as ResponseCreate<Motorcycle>);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 201', async () => {
        const respo = await motorcycleController.create(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(201))
      });
    });
    describe('if fails', () => {
      const payload = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payload.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(motorcycleController.service, 'create')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await motorcycleController.create(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
  describe('6.2 - method read', () => {
    describe('if success', () => {
      const payload = {
        status: 200,
        response: [
          {
            model: "Honda CG Titan 125",
            year: 1963,
            color: "red",
            buyValue: 3500,
            category: "Street",
            engineCapacity: 125,
            _id: '6254c0411954dcc064d02fd1'
          }
        ]
      }
    
      before(async () => {
        request.body = payload.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(motorcycleController.service, 'read')
          .resolves(payload as ResponseRead<Motorcycle>);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 200', async () => {
        await motorcycleController.read(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(200))
        expect((response.json as sinon.SinonStub).calledWith())
      });
    });
    describe('if fails', () => {
      const payload = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payload.response
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(motorcycleController.service, 'read')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await motorcycleController.read(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
  describe('6.3 - method readOne', () => {
    describe('if success', () => {
      const payload = {
        status: 200,
        response: {
          model: "Honda CG Titan 125",
          year: 1963,
          color: "red",
          buyValue: 3500,
          category: "Street",
          engineCapacity: 125,
          _id: '6254c0411954dcc064d02fd1'
        }
      }
    
      before(async () => {
        request.body = payload.response
        request.params = {id: '123'}
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(motorcycleController.service, 'readOne')
          .resolves(payload as ResponseReadOne<Motorcycle>);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 200', async () => {
        await motorcycleController.readOne(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(200))
        expect((response.json as sinon.SinonStub).calledWith())
      });
    });
    describe('if fails', () => {
      const payload = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payload.response
        request.params = {id: '123'}
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(motorcycleController.service, 'readOne')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await motorcycleController.readOne(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
  describe('6.4 - method update', () => {
    describe('if success', () => {
      const payload = {
        status: 200,
        response: {
          model: "Honda CG Titan 125",
          year: 1963,
          color: "red",
          buyValue: 3500,
          category: "Street",
          engineCapacity: 125,
          _id: '6254c0411954dcc064d02fd1'
        }
      }
    
      before(async () => {
        request.body = payload.response
        request.params = {id: '123'}
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(motorcycleController.service, 'update')
          .resolves(payload as ResponseUpdate<Motorcycle>);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 200', async () => {
        await motorcycleController.update(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(200))
        expect((response.json as sinon.SinonStub).calledWith())
      });
    });
    describe('if fails', () => {
      const payload = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = payload.response
        request.params = {id: '123'}
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(motorcycleController.service, 'update')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 400', async () => {
        await carController.update(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(400))
      });
    });
  });
});
