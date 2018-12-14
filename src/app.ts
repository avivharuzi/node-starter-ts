import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as expressFileUpload from 'express-fileupload';
import * as helmet from 'helmet';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {
    this.express.use(compression({ threshold: 0 }));
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use(expressFileUpload());
  }
}

export default new App().express;
