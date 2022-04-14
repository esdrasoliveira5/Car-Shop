"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoModel {
    constructor(model) {
        this.model = model;
        this.create = async (obj) => this.model.create({ ...obj });
        this.read = async () => this.model.find();
        this.readOne = async (id) => this.model.findById(id);
        this.update = async (id, obj) => this.model.findByIdAndUpdate(id, { ...obj }, { new: true });
        this.delete = async (id) => this.model.findByIdAndDelete(id);
    }
}
exports.default = MongoModel;
