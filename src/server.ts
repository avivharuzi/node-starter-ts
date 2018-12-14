import app from './app';

const HOSTNAME: string = process.env.SERVER_HOSTNAME || '127.0.0.1';
const PORT: number = !process.env.SERVER_PORT ? 3000 : parseInt(process.env.SERVER_PORT);

app.listen(PORT, HOSTNAME, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
  }
});
