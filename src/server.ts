import 'reflect-metadata';
import * as chalk from 'chalk';
import * as dotenv from 'dotenv';

dotenv.config();

import { config } from './config';
import { start } from './app';

(async (): Promise<void> => {
  const { hostname, port } = config.server;
  try {
    await start(port, hostname);
  } catch (error) {
    console.log(
      chalk.red(
        `There was a problem while trying to start the server, error: ${error}`
      )
    );
  }
})();
