import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as expressFileUpload from 'express-fileupload';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';

class App {
  public express: express.Application;

  public constructor() {
    dotenv.config();
    this.express = express();
    this.databaseConnection();
    this.middleware();
  }

  private databaseConnection(): void {
    mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, { useNewUrlParser: true })
      .then(() => console.log('Database connected successfully'))
      .catch(err => console.log(err));
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
