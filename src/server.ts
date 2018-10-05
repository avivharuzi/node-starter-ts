import { config } from 'dotenv';

config();

import app from './app';
import * as http from 'http';

const hostname: string = process.env.HOSTNAME || '127.0.0.1';
const port: number = parseInt(process.env.PORT) || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
