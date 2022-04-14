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
const chaiHttp = require("chai-http");
const CarModel_1 = __importDefault(require("../../../models/CarModel"));
const MotorcycleModel_1 = __importDefault(require("../../../models/MotorcycleModel"));
const carModel = new CarModel_1.default();
const motorcycleModel = new MotorcycleModel_1.default();
chai_1.default.use(chaiHttp);
const { expect } = chai_1.default;
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
            };
            before(async () => {
                sinon
                    .stub(carModel.model, 'create')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the car created in the database', async () => {
                const response = await carModel.create({
                    model: "Ferrari Maranello",
                    year: 1963,
                    color: "red",
                    buyValue: 3500000,
                    seatsQty: 2,
                    doorsQty: 2,
                });
                expect(response).to.be.deep.equal(payload);
            });
        });
        describe('if fail', () => {
            before(async () => {
                sinon
                    .stub(carModel.model, 'create')
                    .resolves(undefined);
            });
            after(() => {
                sinon.restore();
            });
            it('return undefined', async () => {
                const response = await carModel.create({
                    model: "Ferrari Maranello",
                    year: 1963,
                    color: "red",
                    buyValue: 3500000,
                    seatsQty: 2,
                    doorsQty: 2,
                });
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
            ];
            before(async () => {
                sinon
                    .stub(carModel.model, 'find')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
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
            after(() => {
                sinon.restore();
            });
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
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
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
            after(() => {
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
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
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
            after(() => {
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
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
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
            after(() => {
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
            };
            before(async () => {
                sinon
                    .stub(motorcycleModel.model, 'create')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the motorcycle created in the database', async () => {
                const response = await motorcycleModel.create({
                    model: "Honda CG Titan 125",
                    year: 1963,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125
                });
                expect(response).to.be.deep.equal(payload);
            });
        });
        describe('if fail', () => {
            before(async () => {
                sinon
                    .stub(motorcycleModel.model, 'create')
                    .resolves(undefined);
            });
            after(() => {
                sinon.restore();
            });
            it('return undefined', async () => {
                const response = await motorcycleModel.create({
                    model: "Honda CG Titan 125",
                    year: 1963,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125
                });
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
            ];
            before(async () => {
                sinon
                    .stub(motorcycleModel.model, 'find')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
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
            after(() => {
                sinon.restore();
            });
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
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
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
            after(() => {
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
            const payload = {
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
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the motorcycle created in the database', async () => {
                const response = await motorcycleModel.update('6254c0411954dcc064d02fd1', payload);
                expect(response).to.be.deep.equal(payload);
            });
        });
        describe('if fail', () => {
            const payload = {
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
            after(() => {
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
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
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
            after(() => {
                sinon.restore();
            });
            it('return null', async () => {
                const response = await motorcycleModel.delete('6254c0411954dcc064d02fd1');
                expect(response).to.be.equal(null);
            });
        });
    });
});
