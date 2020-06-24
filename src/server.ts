import app from './app';
import config from './config';

(async (): Promise<void> => {
  const hostname = config.server.hostname;
  const port = +config.server.port;

  await app.start(port, hostname);
})();
