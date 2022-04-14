"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = __importStar(require("sinon"));
const chai_1 = __importDefault(require("chai"));
const CarService_1 = __importDefault(require("../../../services/CarService"));
const MotorcycleService_1 = __importDefault(require("../../../services/MotorcycleService"));
const { expect } = chai_1.default;
const serviceCar = new CarService_1.default();
const serviceMotorcycle = new MotorcycleService_1.default();
describe('2 - Test CarServices', () => {
    describe('2.1 - method create', () => {
        describe('if success', () => {
            const payload = {
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
                    .stub(serviceCar.model, 'create')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return a object with status 201 and the car saved in the database', async () => {
                const response = await serviceCar.create({
                    model: "Ferrari Maranello",
                    year: 1963,
                    color: "red",
                    buyValue: 3500000,
                    seatsQty: 2,
                    doorsQty: 2,
                });
                expect(response).to.be.deep.equal({ status: 201, response: payload });
            });
        });
        describe('if fail', () => {
            before(async () => {
                sinon
                    .stub(serviceCar.model, 'create')
                    .resolves(undefined);
            });
            after(() => {
                sinon.restore();
            });
            it('return an object with status 400 and an error message if one of the data is wrong', async () => {
                const response = await serviceCar.create({
                    model: "Ferrari Maranello",
                    year: 1963,
                    color: '',
                    buyValue: 3500000,
                    seatsQty: 2,
                    doorsQty: 2,
                });
                expect(response.status).to.be.deep.equal(400);
            });
            it('return an object with status 500 and an error message if the db fail to create a document', async () => {
                const response = await serviceCar.create({
                    model: "Ferrari Maranello",
                    year: 1963,
                    color: 'red',
                    buyValue: 3500000,
                    seatsQty: 2,
                    doorsQty: 2,
                });
                expect(response.status).to.be.deep.equal(500);
            });
        });
    });
    describe('2.2 - method read', () => {
        describe('if success', () => {
            const payload = [
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
                    .stub(serviceCar.model, 'read')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return a object with status 200 and an array with the cars saved in the database', async () => {
                const response = await serviceCar.read();
                expect(response).to.be.deep.equal({ status: 200, response: payload });
            });
        });
        describe('if fail', () => {
            before(async () => {
                sinon
                    .stub(serviceCar.model, 'read')
                    .resolves(undefined);
            });
            after(() => {
                sinon.restore();
            });
            it('return an object with status 500 and an error message if the db fail to return the cars saved', async () => {
                const response = await serviceCar.read();
                expect(response.status).to.be.deep.equal(500);
            });
        });
    });
    describe('2.3 - method readOne', () => {
        describe('if success', () => {
            const payload = {
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
                    .stub(serviceCar.model, 'readOne')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return a object with status 200 and an object with the car saved in the database', async () => {
                const response = await serviceCar.readOne(payload._id);
                expect(response).to.be.deep.equal({ status: 200, response: payload });
            });
        });
        describe('if fail', () => {
            before(async () => {
                sinon
                    .stub(serviceCar.model, 'readOne')
                    .resolves(null);
            });
            after(() => {
                sinon.restore();
            });
            it('return an object with status 400 and an error message if the id dont have 24 characters', async () => {
                const response = await serviceCar.readOne('4169');
                expect(response.status).to.be.equal(400);
                // expect(response.response).to.be.equal({ error: 'Id must have 24 hexadecimal characters' });
            });
            it('return an object with status 404 and an error message if the db dont find the car with the id', async () => {
                const response = await serviceCar.readOne('625246389dbfd06582ad4169');
                expect(response.status).to.be.deep.equal(404);
                // expect(response.response).to.be.equal({ error: 'Object not found' });
            });
        });
    });
    describe('2.4 - method update', () => {
        describe('if success', () => {
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
                    .stub(serviceCar.model, 'update')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return a object with status 200 and an object with the car saved in the database', async () => {
                const response = await serviceCar.update('625605043dbfd06582ad4169', payload);
                expect(response).to.be.deep.equal({ status: 200, response: payload });
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
                    .stub(serviceCar.model, 'update')
                    .resolves(null);
            });
            after(() => {
                sinon.restore();
            });
            it('return an object with status 400 and an error message if the id dont have 24 characters', async () => {
                const response = await serviceCar.update('4169', payload);
                expect(response.status).to.be.equal(400);
                // expect(response.response).to.be.equal({ error: 'Id must have 24 hexadecimal characters' });
            });
            it('return an object with status 400 and an error message if one of the data is wrong', async () => {
                const response = await serviceCar.update('625246389dbfd06582ad4169', {
                    model: "Ferrari Maranello",
                    year: 1963,
                    color: '',
                    buyValue: 3500000,
                    seatsQty: 2,
                    doorsQty: 2,
                });
                expect(response.status).to.be.deep.equal(400);
            });
            it('return an object with status 404 and an error message if the db dont find the car with the id', async () => {
                const response = await serviceCar.update('625246389dbfd06582ad4169', payload);
                expect(response.status).to.be.deep.equal(404);
                // expect(response.response).to.be.equal({ error: 'Object not found' });
            });
        });
    });
    describe('2.5 - method delete', () => {
        describe('if success', () => {
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
                    .stub(serviceCar.model, 'delete')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return a object with status 204 and an object with the car saved in the database', async () => {
                const response = await serviceCar.delete('625605043dbfd06582ad4169');
                expect(response).to.be.deep.equal({ status: 204, response: [] });
            });
        });
        describe('if fail', () => {
            before(async () => {
                sinon
                    .stub(serviceCar.model, 'readOne')
                    .resolves(null);
            });
            after(() => {
                sinon.restore();
            });
            it('return an object with status 400 and an error message if the id dont have 24 characters', async () => {
                const response = await serviceCar.delete('4169');
                expect(response.status).to.be.equal(400);
                // expect(response.response).to.be.equal({ error: 'Id must have 24 hexadecimal characters' });
            });
            // it('return an object with status 404 and an error message if the db dont find the car with the id', async () => {
            //   const response = await serviceCar.delete('625605043dbfd06582ad4169');
            //   expect(response.status).to.be.deep.equal(404);
            //   // expect(response.response).to.be.equal({ error: 'Object not found' });
            // });
        });
    });
});
describe('5 - Test MotorcycleService', () => {
    describe('5.1 - method create', () => {
        describe('if success', () => {
            const payload = {
                model: "Honda CG Titan 125",
                year: 1963,
                color: "red",
                buyValue: 3500,
                category: "Street",
                engineCapacity: 125,
                _id: '6254c0411954dcc064d02fd1'
            };
            before(async () => {
                sinon
                    .stub(serviceMotorcycle.model, 'create')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return a object with status 201 and the motorcycle saved in the database', async () => {
                const response = await serviceMotorcycle.create({
                    model: "Honda CG Titan 125",
                    year: 1963,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125,
                });
                expect(response).to.be.deep.equal({ status: 201, response: payload });
            });
        });
        describe('if fail', () => {
            before(async () => {
                sinon
                    .stub(serviceMotorcycle.model, 'create')
                    .resolves(undefined);
            });
            after(() => {
                sinon.restore();
            });
            it('return an object with status 400 and an error message if one of the data is wrong', async () => {
                const response = await serviceMotorcycle.create({
                    model: "Honda CG Titan 125",
                    year: 196300,
                    color: "",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125,
                });
                expect(response.status).to.be.deep.equal(400);
            });
            it('return an object with status 500 and an error message if the db fail to create a document', async () => {
                const response = await serviceMotorcycle.create({
                    model: "Honda CG Titan 125",
                    year: 1963,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125,
                });
                expect(response.status).to.be.deep.equal(500);
            });
        });
    });
    describe('5.2 - method read', () => {
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
                }
            ];
            before(async () => {
                sinon
                    .stub(serviceMotorcycle.model, 'read')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return a object with status 200 and an array with the motorcycles saved in the database', async () => {
                const response = await serviceMotorcycle.read();
                expect(response).to.be.deep.equal({ status: 200, response: payload });
            });
        });
        describe('if fail', () => {
            before(async () => {
                sinon
                    .stub(serviceMotorcycle.model, 'read')
                    .resolves(undefined);
            });
            after(() => {
                sinon.restore();
            });
            it('return an object with status 500 and an error message if the db fail to return the motorcycles saved', async () => {
                const response = await serviceMotorcycle.read();
                expect(response.status).to.be.deep.equal(500);
            });
        });
    });
    describe('5.3 - method readOne', () => {
        describe('if success', () => {
            const payload = {
                model: "Honda CG Titan 125",
                year: 1963,
                color: "red",
                buyValue: 3500,
                category: "Street",
                engineCapacity: 125,
                _id: '6254c0411954dcc064d02fd1'
            };
            before(async () => {
                sinon
                    .stub(serviceMotorcycle.model, 'readOne')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return a object with status 200 and an object with the motorcycle saved in the database', async () => {
                const response = await serviceMotorcycle.readOne(payload._id);
                expect(response).to.be.deep.equal({ status: 200, response: payload });
            });
        });
        describe('if fail', () => {
            before(async () => {
                sinon
                    .stub(serviceMotorcycle.model, 'readOne')
                    .resolves(null);
            });
            after(() => {
                sinon.restore();
            });
            it('return an object with status 400 and an error message if the id dont have 24 characters', async () => {
                const response = await serviceMotorcycle.readOne('4169');
                expect(response.status).to.be.equal(400);
                // expect(response.response).to.be.equal({ error: 'Id must have 24 hexadecimal characters' });
            });
            it('return an object with status 404 and an error message if the db dont find the motorcycle with the id', async () => {
                const response = await serviceMotorcycle.readOne('6254c0411954dcc064d02fd1');
                expect(response.status).to.be.deep.equal(404);
                // expect(response.response).to.be.equal({ error: 'Object not found' });
            });
        });
    });
    describe('5.4 - method update', () => {
        describe('if success', () => {
            const payload = {
                model: "Honda CG Titan 125",
                year: 1963,
                color: "red",
                buyValue: 3500,
                category: "Street",
                engineCapacity: 125,
                _id: '6254c0411954dcc064d02fd1'
            };
            before(async () => {
                sinon
                    .stub(serviceMotorcycle.model, 'update')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return a object with status 200 and an object with the motorcycle saved in the database', async () => {
                const response = await serviceMotorcycle.update('6254c0411954dcc064d02fd1', {
                    model: "Honda CG Titan 125",
                    year: 1963,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125,
                });
                expect(response).to.be.deep.equal({ status: 200, response: payload });
            });
        });
        describe('if fail', () => {
            const payload = {
                model: "Honda CG Titan 125",
                year: 1963,
                color: "red",
                buyValue: 3500,
                category: "Street",
                engineCapacity: 125,
                _id: '6254c0411954dcc064d02fd1'
            };
            before(async () => {
                sinon
                    .stub(serviceMotorcycle.model, 'update')
                    .resolves(null);
            });
            after(() => {
                sinon.restore();
            });
            it('return an object with status 400 and an error message if the id dont have 24 characters', async () => {
                const response = await serviceMotorcycle.update('4169', {
                    model: "Honda CG Titan 125",
                    year: 1963,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125,
                });
                expect(response.status).to.be.equal(400);
                // expect(response.response).to.be.equal({ error: 'Id must have 24 hexadecimal characters' });
            });
            it('return an object with status 400 and an error message if one of the data is wrong', async () => {
                const response = await serviceMotorcycle.update('6254c0411954dcc064d02fd1', {
                    model: "Honda CG Titan 125",
                    year: 19634857,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 1259898,
                });
                expect(response.status).to.be.deep.equal(400);
            });
            it('return an object with status 404 and an error message if the db dont find the motorcycle with the id', async () => {
                const response = await serviceMotorcycle.update('6254c0411954dcc064d02fd1', {
                    model: "Honda CG Titan 125",
                    year: 1963,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125,
                });
                expect(response.status).to.be.deep.equal(404);
                // expect(response.response).to.be.equal({ error: 'Object not found' });
            });
        });
    });
    describe('5.5 - method delete', () => {
        describe('if success', () => {
            const payload = {
                model: "Honda CG Titan 125",
                year: 1963,
                color: "red",
                buyValue: 3500,
                category: "Street",
                engineCapacity: 125,
                _id: '6254c0411954dcc064d02fd1'
            };
            before(async () => {
                sinon
                    .stub(serviceMotorcycle.model, 'delete')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return a object with status 204 and an object with the motorcycle saved in the database', async () => {
                const response = await serviceMotorcycle.delete('6254c0411954dcc064d02fd1');
                expect(response).to.be.deep.equal({ status: 204, response: [] });
            });
        });
        describe('if fail', () => {
            before(async () => {
                sinon
                    .stub(serviceMotorcycle.model, 'readOne')
                    .resolves(null);
            });
            after(() => {
                sinon.restore();
            });
            it('return an object with status 400 and an error message if the id dont have 24 characters', async () => {
                const response = await serviceMotorcycle.delete('4169');
                expect(response.status).to.be.equal(400);
                // expect(response.response).to.be.equal({ error: 'Id must have 24 hexadecimal characters' });
            });
            // it('return an object with status 404 and an error message if the db dont find the motorcycle with the id', async () => {
            //   const response = await serviceCar.delete('625605043dbfd06582ad4169');
            //   expect(response.status).to.be.deep.equal(404);
            //   // expect(response.response).to.be.equal({ error: 'Object not found' });
            // });
        });
    });
});
