import 'reflect-metadata';
import './config/dotenv';
import createApp from './app';
import { PORT } from './utils/envs';

const startServer = async () => {
  const app = await createApp();
  const port = PORT || 8080;

  app
    .listen(port, () => {
      console.log(`Listening on ${port}`);
    })
    .on('close', () => {
      console.log('Closing server');
    });
}

startServer();