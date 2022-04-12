// template para criação dos testes de cobertura da camada de controller


import mongoose from 'mongoose';
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import App from '../../../app';
const { expect } = chai;
const service = new CarService();
const app = new App();

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
      sinon
        .stub(service, 'create')
        .resolves(payloadCar);
    });
  
    after(()=>{
      (service.create as sinon.SinonStub).restore();
    })
  
    it('Retorna o status 200', async () => {
      const response = await chai
      .request(app)
      .get('/cars')
      .set('X-API-Key', 'foobar')
      .send({
        "model": "Ferrari Maranello",
        "year": 1963,
        "color": "red",
        "buyValue": 3500000,
        "seatsQty": 2,
        "doorsQty": 2
      })
      console.log(response);
      
      expect(response).to.have.status(201);
    });
  })
});