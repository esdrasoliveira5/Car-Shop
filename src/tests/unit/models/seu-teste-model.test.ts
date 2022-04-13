import mongoose, { Types,  Model as M, Document } from 'mongoose';
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarModel from '../../../models/CarModel';
const carModel = new CarModel();

chai.use(chaiHttp);
const { expect } = chai;

describe('3 - Test CarModel', () => {

  describe('3.1 - method create', () => {
    describe('if success', () => {
      const payloadCar = {
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
          .resolves(payloadCar);
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
  
        expect(response).to.be.deep.equal(payloadCar);
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
      const payloadCar = [
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
          .resolves(payloadCar as never);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the car created in the database', async () => {
        const response = await carModel.read();
  
        expect(response).to.be.deep.equal(payloadCar);
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
          .stub(carModel.model, 'findOne')
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
          .stub(carModel.model, 'find')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      });
    
      it('return undefined', async () => {
        const response = await carModel.read();
  
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
});
