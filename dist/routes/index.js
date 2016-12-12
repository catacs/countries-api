"use strict";
const express_1 = require("express");
const Api_1 = require("./Api");
class AppRouter {
    /**
     * Initialize the CountryRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.use('/api/', Api_1.default);
        this.router.use('/api/v1/', Api_1.default);
    }
}
exports.AppRouter = AppRouter;
// Create the AppRouter, and export its configured Express.Router
const appRouter = new AppRouter();
appRouter.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = appRouter.router;
