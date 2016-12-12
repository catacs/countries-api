const countries = require('../repositories/countries');

export class CountryService {
   /**
   * Initialize the CountryService
   */
  constructor() {
  }

  /**
   * GET all Countries.
   */
  public getAll() {
    return countries;
  }

  /**
   * GET by id.
   */
  public getById(id) {
    const country = countries.find((country) => {
      return country.cca2 === id;
    })
    return country;
  }
}

// Create the CountryRouter, and export it
const countryService = new CountryService();

export default countryService;