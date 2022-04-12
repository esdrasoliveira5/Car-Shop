import mongoose, { Types,  Model as M, Document } from 'mongoose';
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarModel from '../../../models/CarModel';
import { Car } from '../../../interfaces/CarInterface';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test CarModel', () => {
  const carModel = new CarModel();

  describe('method create', () => {
    describe('if success', () => {
      const payloadCar = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
        _id: '123'
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
  describe('method read', () => {
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
  describe('method readOne', () => {
    describe('if success', () => {
      const payload = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
        _id: new Types.ObjectId(),
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
});
