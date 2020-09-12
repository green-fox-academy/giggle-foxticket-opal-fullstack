import express from 'express';
import morgan from 'morgan';
import { api, system } from './routes';
import logger from './logger';
import errorHandler from './middlewares/error-handler';

class App {
  constructor() {
    this.app = express();
    this.setup();
  }

  setup() {
    this.app.use(morgan('combined', { stream: logger.stream }));
    this.app.use('/api', api);
    this.app.use('/system', system);
    this.app.use(errorHandler);
  }

  run(port) {
    this.server = this.app.listen(port, () => {
      logger.info(`App is listening on ${port}`);
    });
  }
}

export default App;
