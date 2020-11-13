import bodyParser from 'body-parser';

const init = (app) => {
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.send({
      test: 'Hello, World!',
    });
  });

  app.use((err, req, res, next) => {
    return console.error(err);
  });
};

export { init };
