import {Router, Request, Response, NextFunction} from 'express';
import Api from './Api'

export class AppRouter {
  router: Router

  /**
   * Initialize the CountryRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {  
		this.router.use('/api/', Api);
  	this.router.use('/api/v1/', Api);
  }

}

// Create the AppRouter, and export its configured Express.Router
const appRouter = new AppRouter();
appRouter.init();

export default appRouter.router;