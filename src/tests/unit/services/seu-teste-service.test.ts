import * as sinon from 'sinon';
import chai from 'chai';
import CarService from '../../../services/CarService';
const { expect } = chai;
const service = new CarService();

describe('2 - Test CarServices', () => {
  describe('2.1 - method create', () => {
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
  describe('2.2 - method read', () => {
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
  describe('2.3 - method readOne', () => {
    describe('if success', () => {
      const payloadCar = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
        _id: '625605043dbfd06582ad4169'
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
        const response = await service.readOne(payloadCar._id);

        expect(response).to.be.deep.equal({ status: 200, response: payloadCar });
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(service.model, 'readOne')
          .resolves(null);
      });
    
      after(()=>{
        sinon.restore();
      });
  
      it('return an object with status 400 and an error message if the id dont have 24 characters', async () => {
        const response = await service.readOne('4169');
        
        expect(response.status).to.be.equal(400);
        // expect(response.response).to.be.equal({ error: 'Id must have 24 hexadecimal characters' });
      });
      it('return an object with status 404 and an error message if the db dont find the car with the id', async () => {
        const response = await service.readOne('625246389dbfd06582ad4169');

        expect(response.status).to.be.deep.equal(404);
        // expect(response.response).to.be.equal({ error: 'Object not found' });
      });
    });
  });
  describe('2.4 - method update', () => {
    describe('if success', () => {
      const payloadCar = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      };

      before(async () => {
        sinon
          .stub(service.model, 'update')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return a object with status 200 and an object with the car saved in the database', async () => {
        const response = await service.update('625605043dbfd06582ad4169', payloadCar);

        expect(response).to.be.deep.equal({ status: 200, response: payloadCar });
      });
    });
    describe('if fail', () => {
      const payloadCar = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      };
      
      before(async () => {
        sinon
          .stub(service.model, 'update')
          .resolves(null);
      });
    
      after(()=>{
        sinon.restore();
      });
  
      it('return an object with status 400 and an error message if the id dont have 24 characters', async () => {
        const response = await service.update('4169', payloadCar);
        
        expect(response.status).to.be.equal(400);
        // expect(response.response).to.be.equal({ error: 'Id must have 24 hexadecimal characters' });
      });
      it('return an object with status 400 and an error message if one of the data is wrong', async () => {
        const response = await service.update('625246389dbfd06582ad4169', {
          model: "Ferrari Maranello",
          year: 1963,
          color: '',
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
        })
        expect(response.status).to.be.deep.equal(400);
      });
      it('return an object with status 404 and an error message if the db dont find the car with the id', async () => {
        const response = await service.update('625246389dbfd06582ad4169', payloadCar);

        expect(response.status).to.be.deep.equal(404);
        // expect(response.response).to.be.equal({ error: 'Object not found' });
      });
    });
  });
  describe('2.5 - method delete', () => {
    describe('if success', () => {
      const payloadCar = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      };

      before(async () => {
        sinon
          .stub(service.model, 'delete')
          .resolves(payloadCar);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return a object with status 204 and an object with the car saved in the database', async () => {
        const response = await service.delete('625605043dbfd06582ad4169');

        expect(response).to.be.deep.equal({ status: 204, response: [] });
      });
    });
    describe('if fail', () => {
      before(async () => {
        sinon
          .stub(service.model, 'readOne')
          .resolves(null);
      });
    
      after(()=>{
        sinon.restore();
      });
  
      it('return an object with status 400 and an error message if the id dont have 24 characters', async () => {
        const response = await service.delete('4169');
        
        expect(response.status).to.be.equal(400);
        // expect(response.response).to.be.equal({ error: 'Id must have 24 hexadecimal characters' });
      });
      // it('return an object with status 404 and an error message if the db dont find the car with the id', async () => {
      //   const response = await service.delete('625605043dbfd06582ad4169');
        
      //   expect(response.status).to.be.deep.equal(404);
      //   // expect(response.response).to.be.equal({ error: 'Object not found' });
      // });
    });
  });
});