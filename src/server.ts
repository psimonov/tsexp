import express from 'express';

import { init } from './app';

const server = express();
const port = 3000;

server.disable('x-powered-by');

init(server);

server.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
