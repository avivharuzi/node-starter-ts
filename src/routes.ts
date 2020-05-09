import { Application, Router } from 'express';

const apiRouter: Router = Router();

export default (app: Application) => {
  // Here will be all application routes.
  app.use('/api', apiRouter);
};
