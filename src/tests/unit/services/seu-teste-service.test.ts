import * as sinon from 'sinon';
import chai from 'chai';
import CarService from '../../../services/CarService';
const { expect } = chai;
const service = new CarService();

describe('Test CarServices', () => {
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
          .stub(service.model, 'create')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return a object with status 201 and the car saved in the database', async () => {
        const response = await service.create({
          model: "Ferrari Maranello",
          year: 1963,
          color: "red",
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
        })
        expect(response).to.be.deep.equal({ status: 201, response: payloadCar });
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(service.model, 'create')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      });
  
      it('return an object with status 400 and an error message if one of the data is wrong', async () => {
        const response = await service.create({
          model: "Ferrari Maranello",
          year: 1963,
          color: '',
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
        })
        expect(response.status).to.be.deep.equal(400);
      });
      it('return an object with status 500 and an error message if the db fail to create a document', async () => {
        const response = await service.create({
          model: "Ferrari Maranello",
          year: 1963,
          color: 'red',
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
        })
        expect(response.status).to.be.deep.equal(500);
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
          _id: '123'
        }
      ];

      before(async () => {
        sinon
          .stub(service.model, 'read')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return a object with status 200 and an array with the cars saved in the database', async () => {
        const response = await service.read();

        expect(response).to.be.deep.equal({ status: 200, response: payloadCar });
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(service.model, 'read')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      });
  
      it('return an object with status 500 and an error message if the db fail to return the cars saved', async () => {
        const response = await service.read();

        expect(response.status).to.be.deep.equal(500);
      });
    });
  });
  describe('method readOne', () => {
    describe('if success', () => {
      const payloadCar = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
        _id: '123'
      };

      before(async () => {
        sinon
          .stub(service.model, 'readOne')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return a object with status 200 and an object with the car saved in the database', async () => {
        const response = await service.readOne('123');

        expect(response).to.be.deep.equal({ status: 200, response: payloadCar });
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(service.model, 'read')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      });
  
      it('return an object with status 500 and an error message if the db fail to return the cars saved', async () => {
        const response = await service.readOne('123');

        expect(response.status).to.be.deep.equal(500);
      });
    });
  });
});