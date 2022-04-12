import mongoose from 'mongoose';
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarModel from '../../../models/CarModel';


chai.use(chaiHttp);
const { expect } = chai;
const carModel = new CarModel();

describe('Test CarModel', () => {
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
});
