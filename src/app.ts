import express from 'express';

const app = express();
const port = 3000;

app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.use((err, req, res, next) => {
  return console.error(err);
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
