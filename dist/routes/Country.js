"use strict";
const express_1 = require("express");
const Country_1 = require("../controllers/Country");
class CountryRouter {
    /**
     * Initialize the CountryRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', Country_1.default.getAll);
        this.router.get('/:id', Country_1.default.getById);
    }
}
exports.CountryRouter = CountryRouter;
// Create the CountryRouter, and export its configured Express.Router
const countryRouter = new CountryRouter();
countryRouter.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = countryRouter.router;
