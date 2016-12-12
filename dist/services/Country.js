"use strict";
const countries = require('../repositories/countries');
class CountryService {
    /**
    * Initialize the CountryService
    */
    constructor() {
    }
    /**
     * GET all Countries.
     */
    getAll() {
        return countries;
    }
    /**
     * GET by id.
     */
    getById(id) {
        const country = countries.find((country) => {
            return country.cca2 === id;
        });
        return country;
    }
}
exports.CountryService = CountryService;
// Create the CountryRouter, and export it
const countryService = new CountryService();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = countryService;
