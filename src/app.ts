import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {
  public express: express.Application;
  
  public constructor() {
    this.express = express();
    this.middleware();
  }
  
  private middleware() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().express;
