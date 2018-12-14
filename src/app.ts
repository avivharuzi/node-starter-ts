import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware() {
    this.express.use(compression({ threshold: 0 }));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cookieParser());
  }
}

export default new App().express;
