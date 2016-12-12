"use strict";
const Country_1 = require("../services/Country");
class CountryController {
    /**
    * Initialize the CountryController
    */
    constructor() {
    }
    /**
     * GET all Countries.
     */
    getAll(req, res, next) {
        const countries = Country_1.default.getAll();
        res.send(countries);
    }
    /**
     * GET by id.
     */
    getById(req, res, next) {
        const id = req.params.id;
        const country = Country_1.default.getById(id);
        res.send(country);
    }
}
exports.CountryController = CountryController;
// Create the CountryRouter, and export it
const countryController = new CountryController();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = countryController;
