import { Application, Router } from 'express';

const apiRouter: Router = Router();

export default (app: Application): void => {
  // Here will be all application routes.
  app.use('/api', apiRouter);
};
