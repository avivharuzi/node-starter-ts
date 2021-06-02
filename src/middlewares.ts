import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as expressFileupload from 'express-fileupload';
import * as helmet from 'helmet';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';
import { Application } from 'express';

import { config } from './config';
import { errorMiddleware } from './middlewares/error.middleware';

export const beforeMiddlewares = async (app: Application): Promise<void> => {
  app.use(cors());
  app.use(helmet());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(expressFileupload());
  app.use(compression({ threshold: 0 }));
  if (!config.server.isProduction) {
    app.use(morgan('dev')); // Log requests on development.
  }
};

export const afterMiddlewares = async (app: Application): Promise<void> => {
  app.use(errorMiddleware);
};
