import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const HOSTNAME: string = process.env.HOSTNAME || '127.0.0.1';
const PORT: number = parseInt(process.env.PORT) || 3000;

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
