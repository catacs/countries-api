import {Router} from 'express';
import Countries from './Country';

export class ApiRouter {
  router: Router

  /**
   * Initialize the ApiRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.use('/countries', Countries);
  }

}

// Create the CountryRouter, and export its configured Express.Router
const apiRouter = new ApiRouter();
apiRouter.init();

export default apiRouter.router;