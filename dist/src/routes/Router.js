"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CustomRouter {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    addRoute(controller, route = controller.route) {
        this.router.post(route, controller.create);
        this.router.get(route, controller.read);
        this.router.get(`${route}/:id`, controller.readOne);
        this.router.put(`${route}/:id`, controller.update);
        this.router.delete(`${route}/:id`, controller.delete);
    }
}
exports.default = CustomRouter;
