// import { expect } from 'chai';
// import mongoose from 'mongoose';

import mongoose from 'mongoose';
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
const { expect } = chai;
const model = new CarModel();
const service = new CarService();

describe('Testa o service Car', () => {
  describe('Se os dados estiverem corretos', () => {
    const payloadCar = {
      model: "Ferrari Maranello",
      year: 1963,
      color: "red",
      buyValue: 3500000,
      seatsQty: 2,
      doorsQty: 2,
    }
    before(async () => {
      sinon
        .stub(model, 'create')
        .resolves(payloadCar);
    });
  
    after(()=>{
      (model.create as sinon.SinonStub).restore();
    })
  
    it('Retorna carro criado no banco de dados', async () => {
      const response = await service.create({
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      })
      expect(response).to.be.equal(payloadCar);
    });
  })
});