import app from './app';

const HOSTNAME: string = process.env.SERVER_HOSTNAME || '127.0.0.1';
const PORT: number = parseInt(process.env.SERVER_PORT) || 3000;

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
