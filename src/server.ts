import express from 'express';

const app = express();
const port = 3000;

app.disable('x-powered-by');

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

export { app };
