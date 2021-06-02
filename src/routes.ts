import { Application, Router } from 'express';

const apiRouter: Router = Router();

export const routes = async (app: Application): Promise<void> => {
  app.use('/api', apiRouter);
};
