import mongoose, { Types,  Model as M, Document } from 'mongoose';
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarModel from '../../../models/CarModel';
import MotorcycleModel from '../../../models/MotorcycleModel';
import { Motorcycle } from '../../../interfaces/MotorcycleInterface';
const carModel = new CarModel();
const motorcycleModel = new MotorcycleModel();

chai.use(chaiHttp);
const { expect } = chai;

describe('3 - Test CarModel', () => {

  describe('3.1 - method create', () => {
    describe('if success', () => {
      const payload = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
        _id: '6254c0411954dcc064d02fd1'
      }
      before(async () => {
        sinon
          .stub(carModel.model, 'create')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the car created in the database', async () => {
        const response = await carModel.create({
          model: "Ferrari Maranello",
          year: 1963,
          color: "red",
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
        })
  
        expect(response).to.be.deep.equal(payload);
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(carModel.model, 'create')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return undefined', async () => {
        const response = await carModel.create({
          model: "Ferrari Maranello",
          year: 1963,
          color: "red",
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
        })
  
        expect(response).to.be.equal(undefined);
      });
    });
  });
  describe('3.2 - method read', () => {
    describe('if success', () => {
      const payload = [
        {
          model: "Ferrari Maranello",
          year: 1963,
          color: "red",
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
          _id: '6254c0411954dcc064d02fd1'
        },
        {
          model: "Ferrari Maranello",
          year: 1963,
          color: "red",
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
          _id: '6254c0411954dcc064d02fd1'
        }
      ]
      before(async () => {
        sinon
          .stub(carModel.model, 'find')
          .resolves(payload as never);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the car created in the database', async () => {
        const response = await carModel.read();
  
        expect(response).to.be.deep.equal(payload);
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(carModel.model, 'find')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return undefined', async () => {
        const response = await carModel.read();
  
        expect(response).to.be.equal(undefined);
      });
    });
  });
  describe('3.3 - method readOne', () => {
    describe('if success', () => {
      const payload = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
        _id: '6254c0411954dcc064d02fd1',
      };

      
      before(() => {
        sinon
          .stub(carModel.model, 'findById')
          .resolves(payload as never);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the car created in the database', async () => {
        const response = await carModel.readOne('123');
  
        expect(response).to.be.deep.equal(payload);
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(carModel.model, 'findById')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      });
    
      it('return undefined', async () => {
        const response = await carModel.readOne('6254c0411954dcc064d02fd1');
  
        expect(response).to.be.equal(undefined);
      });
    });
  });
  describe('3.4 - method update', () => {
    describe('if success', () => {
      const payload = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      };
      
      before(() => {
        sinon
          .stub(carModel.model, 'findByIdAndUpdate')
          .resolves(payload as never);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the car created in the database', async () => {
        const response = await carModel.update('6254c0411954dcc064d02fd1', payload);
  
        expect(response).to.be.deep.equal(payload);
      });
    });
    describe('if fail', () => {
      const payload = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      };
      before(async () => {
        sinon
          .stub(carModel.model, 'findByIdAndUpdate')
          .resolves(null);
      });
    
      after(()=>{
        sinon.restore();
      });
    
      it('return undefined', async () => {
        const response = await carModel.update('6254c0411954dcc064d02fd1', payload);
  
        expect(response).to.be.equal(null);
      });
    });
  });
  describe('3.5 - method delete', () => {
    describe('if success', () => {
      const payload = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
        _id: '6254c0411954dcc064d02fd1',
      };

      
      before(() => {
        sinon
          .stub(carModel.model, 'findByIdAndDelete')
          .resolves(payload as never);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('delete the car created in the database', async () => {
        const response = await carModel.delete('6254c0411fr4dcc064d02fd1');
  
        expect(response).to.be.deep.equal(payload);
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(carModel.model, 'findByIdAndDelete')
          .resolves(null);
      });
    
      after(()=>{
        sinon.restore();
      });
    
      it('return null', async () => {
        const response = await carModel.delete('6254c0411954dcc064d02fd1');
  
        expect(response).to.be.equal(null);
      });
    });
  });
});


describe('4 - Test motorcycleModel', () => {

  describe('4.1 - method create', () => {
    describe('if success', () => {
      const payload = {
        _id: "4edd40c86762e0fb12000003",
        model: "Honda CG Titan 125",
        year: 1963,
        color: "red",
        buyValue: 3500,
        category: "Street",
        engineCapacity: 125
      }
      before(async () => {
        sinon
          .stub(motorcycleModel.model, 'create')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the motorcycle created in the database', async () => {
        const response = await motorcycleModel.create({
          model: "Honda CG Titan 125",
          year: 1963,
          color: "red",
          buyValue: 3500,
          category: "Street",
          engineCapacity: 125
        })
  
        expect(response).to.be.deep.equal(payload);
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(motorcycleModel.model, 'create')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return undefined', async () => {
        const response = await motorcycleModel.create({
          model: "Honda CG Titan 125",
          year: 1963,
          color: "red",
          buyValue: 3500,
          category: "Street",
          engineCapacity: 125
        })
  
        expect(response).to.be.equal(undefined);
      });
    });
  });
  describe('4.2 - method read', () => {
    describe('if success', () => {
      const payload = [
        {
          model: "Honda CG Titan 125",
          year: 1963,
          color: "red",
          buyValue: 3500,
          category: "Street",
          engineCapacity: 125,
          _id: '6254c0411954dcc064d02fd1'
        },
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
      before(async () => {
        sinon
          .stub(motorcycleModel.model, 'find')
          .resolves(payload as never);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the motorcycle created in the database', async () => {
        const response = await motorcycleModel.read();
  
        expect(response).to.be.deep.equal(payload);
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(motorcycleModel.model, 'find')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return undefined', async () => {
        const response = await motorcycleModel.read();
  
        expect(response).to.be.equal(undefined);
      });
    });
  });
  describe('4.3 - method readOne', () => {
    describe('if success', () => {
      const payload = {
        model: "Honda CG Titan 125",
        year: 1963,
        color: "red",
        buyValue: 3500,
        category: "Street",
        engineCapacity: 125,
        _id: '6254c0411954dcc064d02fd1',
      };

      
      before(() => {
        sinon
          .stub(motorcycleModel.model, 'findById')
          .resolves(payload as never);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the motorcycle created in the database', async () => {
        const response = await motorcycleModel.readOne('123');
  
        expect(response).to.be.deep.equal(payload);
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(motorcycleModel.model, 'findById')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      });
    
      it('return undefined', async () => {
        const response = await motorcycleModel.readOne('6254c0411954dcc064d02fd1');
  
        expect(response).to.be.equal(undefined);
      });
    });
  });
  describe('4.4 - method update', () => {
    describe('if success', () => {
      const payload: Motorcycle = {
        model: "Honda CG Titan 125",
        year: 1963,
        color: "red",
        buyValue: 3500,
        category: "Street",
        engineCapacity: 125
      };
      
      before(() => {
        sinon
          .stub(motorcycleModel.model, 'findByIdAndUpdate')
          .resolves(payload as never);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the motorcycle created in the database', async () => {
        const response = await motorcycleModel.update('6254c0411954dcc064d02fd1', payload);
  
        expect(response).to.be.deep.equal(payload);
      });
    });
    describe('if fail', () => {
      const payload: Motorcycle = {
        model: "Honda CG Titan 125",
        year: 1963,
        color: "red",
        buyValue: 3500,
        category: 'Street',
        engineCapacity: 125
      };
      before(async () => {
        sinon
          .stub(motorcycleModel.model, 'findByIdAndUpdate')
          .resolves(null);
      });
    
      after(()=>{
        sinon.restore();
      });
    
      it('return undefined', async () => {
        const response = await motorcycleModel.update('6254c0411954dcc064d02fd1', payload);
  
        expect(response).to.be.equal(null);
      });
    });
  });
  describe('4.5 - method delete', () => {
    describe('if success', () => {
      const payload = {
        model: "Honda CG Titan 125",
        year: 1963,
        color: "red",
        buyValue: 3500,
        category: "Street",
        engineCapacity: 125,
        _id: '6254c0411954dcc064d02fd1',
      };

      
      before(() => {
        sinon
          .stub(motorcycleModel.model, 'findByIdAndDelete')
          .resolves(payload as never);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('delete the motorcycle created in the database', async () => {
        const response = await motorcycleModel.delete('6254c0411fr4dcc064d02fd1');
  
        expect(response).to.be.deep.equal(payload);
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(motorcycleModel.model, 'findByIdAndDelete')
          .resolves(null);
      });
    
      after(()=>{
        sinon.restore();
      });
    
      it('return null', async () => {
        const response = await motorcycleModel.delete('6254c0411954dcc064d02fd1');
  
        expect(response).to.be.equal(null);
      });
    });
  });
});