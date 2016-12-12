import {Router, Request, Response, NextFunction} from 'express';
import CountryController from '../controllers/Country'

export class CountryRouter {
  router: Router

  /**
   * Initialize the CountryRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }
  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', CountryController.getAll);
    this.router.get('/:id', CountryController.getById)
  }

}

// Create the CountryRouter, and export its configured Express.Router
const countryRouter = new CountryRouter();
countryRouter.init();

export default countryRouter.router;