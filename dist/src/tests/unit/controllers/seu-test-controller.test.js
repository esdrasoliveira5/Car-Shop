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
const CarController_1 = __importDefault(require("../../../controllers/CarController"));
const MotorcycleController_1 = __importDefault(require("../../../controllers/MotorcycleController"));
const { expect } = chai_1.default;
const carController = new CarController_1.default();
const motorcycleController = new MotorcycleController_1.default();
const request = {};
const response = {};
describe('1 - Test the CarController', () => {
    describe('1.1 - method create', () => {
        describe('if success', () => {
            const payload = {
                status: 201,
                response: {
                    model: "Ferrari Maranello",
                    year: 1963,
                    color: "red",
                    buyValue: 3500000,
                    seatsQty: 2,
                    doorsQty: 2,
                }
            };
            before(async () => {
                request.body = payload.response;
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(carController.service, 'create')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 201', async () => {
                const respo = await carController.create(request, response);
                expect(response.status.calledWith(201));
            });
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(async () => {
                request.body = payload.response;
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(carController.service, 'create')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 400', async () => {
                await carController.create(request, response);
                expect(response.status.calledWith(400));
            });
        });
    });
    describe('1.2 - method read', () => {
        describe('if success', () => {
            const payload = {
                status: 200,
                response: [
                    {
                        model: "Ferrari Maranello",
                        year: 1963,
                        color: "red",
                        buyValue: 3500000,
                        seatsQty: 2,
                        doorsQty: 2,
                    }
                ]
            };
            before(async () => {
                request.body = payload.response;
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(carController.service, 'read')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 200', async () => {
                await carController.read(request, response);
                expect(response.status.calledWith(200));
                expect(response.json.calledWith());
            });
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(async () => {
                request.body = payload.response;
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(carController.service, 'read')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 400', async () => {
                await carController.read(request, response);
                expect(response.status.calledWith(400));
            });
        });
    });
    describe('1.3 - method readOne', () => {
        describe('if success', () => {
            const payload = {
                status: 200,
                response: {
                    model: "Ferrari Maranello",
                    year: 1963,
                    color: "red",
                    buyValue: 3500000,
                    seatsQty: 2,
                    doorsQty: 2,
                }
            };
            before(async () => {
                request.body = payload.response;
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(carController.service, 'readOne')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 200', async () => {
                await carController.readOne(request, response);
                expect(response.status.calledWith(200));
                expect(response.json.calledWith());
            });
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(async () => {
                request.body = payload.response;
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(carController.service, 'readOne')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 400', async () => {
                await carController.readOne(request, response);
                expect(response.status.calledWith(400));
            });
        });
    });
    describe('1.4 - method update', () => {
        describe('if success', () => {
            const payload = {
                status: 200,
                response: {
                    model: "Ferrari Maranello",
                    year: 1963,
                    color: "red",
                    buyValue: 3500000,
                    seatsQty: 2,
                    doorsQty: 2,
                }
            };
            before(async () => {
                request.body = payload.response;
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(carController.service, 'update')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 200', async () => {
                await carController.update(request, response);
                expect(response.status.calledWith(200));
                expect(response.json.calledWith());
            });
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(async () => {
                request.body = payload.response;
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(carController.service, 'update')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 400', async () => {
                await carController.update(request, response);
                expect(response.status.calledWith(400));
            });
        });
    });
    describe('1.5 - method delete', () => {
        describe('if success', () => {
            const payload = {
                status: 200,
                response: []
            };
            before(async () => {
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(carController.service, 'delete')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 200', async () => {
                await carController.delete(request, response);
                expect(response.status.calledWith(200));
                expect(response.json.calledWith());
            });
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(async () => {
                request.body = payload.response;
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(carController.service, 'delete')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 400', async () => {
                await carController.delete(request, response);
                expect(response.status.calledWith(400));
            });
        });
    });
});
describe('6 - Test the motorcycleController', () => {
    describe('6.1 - method create', () => {
        describe('if success', () => {
            const payload = {
                status: 201,
                response: {
                    model: "Honda CG Titan 125",
                    year: 1963,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125,
                    _id: '6254c0411954dcc064d02fd1'
                }
            };
            before(async () => {
                request.body = payload.response;
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(motorcycleController.service, 'create')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 201', async () => {
                const respo = await motorcycleController.create(request, response);
                expect(response.status.calledWith(201));
            });
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(async () => {
                request.body = payload.response;
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(motorcycleController.service, 'create')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 400', async () => {
                await motorcycleController.create(request, response);
                expect(response.status.calledWith(400));
            });
        });
    });
    describe('6.2 - method read', () => {
        describe('if success', () => {
            const payload = {
                status: 200,
                response: [
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
            };
            before(async () => {
                request.body = payload.response;
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(motorcycleController.service, 'read')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 200', async () => {
                await motorcycleController.read(request, response);
                expect(response.status.calledWith(200));
                expect(response.json.calledWith());
            });
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(async () => {
                request.body = payload.response;
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(motorcycleController.service, 'read')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 400', async () => {
                await motorcycleController.read(request, response);
                expect(response.status.calledWith(400));
            });
        });
    });
    describe('6.3 - method readOne', () => {
        describe('if success', () => {
            const payload = {
                status: 200,
                response: {
                    model: "Honda CG Titan 125",
                    year: 1963,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125,
                    _id: '6254c0411954dcc064d02fd1'
                }
            };
            before(async () => {
                request.body = payload.response;
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(motorcycleController.service, 'readOne')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 200', async () => {
                await motorcycleController.readOne(request, response);
                expect(response.status.calledWith(200));
                expect(response.json.calledWith());
            });
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(async () => {
                request.body = payload.response;
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(motorcycleController.service, 'readOne')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 400', async () => {
                await motorcycleController.readOne(request, response);
                expect(response.status.calledWith(400));
            });
        });
    });
    describe('6.4 - method update', () => {
        describe('if success', () => {
            const payload = {
                status: 200,
                response: {
                    model: "Honda CG Titan 125",
                    year: 1963,
                    color: "red",
                    buyValue: 3500,
                    category: "Street",
                    engineCapacity: 125,
                    _id: '6254c0411954dcc064d02fd1'
                }
            };
            before(async () => {
                request.body = payload.response;
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(motorcycleController.service, 'update')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 200', async () => {
                await motorcycleController.update(request, response);
                expect(response.status.calledWith(200));
                expect(response.json.calledWith());
            });
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(async () => {
                request.body = payload.response;
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(motorcycleController.service, 'update')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 400', async () => {
                await carController.update(request, response);
                expect(response.status.calledWith(400));
            });
        });
    });
    describe('6.5 - method delete', () => {
        describe('if success', () => {
            const payload = {
                status: 200,
                response: []
            };
            before(async () => {
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(motorcycleController.service, 'delete')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 200', async () => {
                await motorcycleController.delete(request, response);
                expect(response.status.calledWith(200));
                expect(response.json.calledWith());
            });
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(async () => {
                request.body = payload.response;
                request.params = { id: '123' };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(motorcycleController.service, 'delete')
                    .resolves(payload);
            });
            after(() => {
                sinon.restore();
            });
            it('return the status 400', async () => {
                await motorcycleController.delete(request, response);
                expect(response.status.calledWith(400));
            });
        });
    });
});
