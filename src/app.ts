import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';

import config from './config';
import middlewares from './middlewares';
import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression({ threshold: 0 }));

if (!config.server.isProduction) {
  app.use(morgan('dev')); // Log requests on development.
}

app.use(middlewares.response()); // res.locals.success, res.locals.error

routes(app); // Configure all our application routes.

export default app;
