import {Request, Response, NextFunction} from 'express';
import CountryService from '../services/Country';

export class CountryController {
   /**
   * Initialize the CountryController
   */
  constructor() {
  }

  /**
   * GET all Countries.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    const countries = CountryService.getAll();
    res.send(countries);
  }

  /**
   * GET by id.
   */
  public getById(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const country = CountryService.getById(id);
    res.send(country);
  }
}

// Create the CountryRouter, and export it
const countryController = new CountryController();

export default countryController;