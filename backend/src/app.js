import express from 'express';
import morgan from 'morgan';
import path from 'path';

import { api, system } from './routes';
import logger from './logger';
import errorHandler from './middlewares/error-handler';

const app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(morgan('combined', { stream: logger.stream }));
app.use('/api', api);
app.use('/system', system);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
});


app.use(errorHandler);

export default app;

