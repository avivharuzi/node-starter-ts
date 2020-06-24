import { Application, Router } from 'express';

const apiRouter: Router = Router();

export default async (app: Application): Promise<void> => {
  // Here will be all application routes.
  app.use('/api', apiRouter);
};
