"use strict";
const express_1 = require("express");
const Country_1 = require("./Country");
class ApiRouter {
    /**
     * Initialize the ApiRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.use('/countries', Country_1.default);
    }
}
exports.ApiRouter = ApiRouter;
// Create the CountryRouter, and export its configured Express.Router
const apiRouter = new ApiRouter();
apiRouter.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = apiRouter.router;
