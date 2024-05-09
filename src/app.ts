import express from 'express';
import cors from 'cors';
import { routes } from './features';

export default async function createApp() {
  const app = express();
  app.use(cors());

  app.use(routes);

  app.get('/', (_, res) => {
    res.json({ message: 'Online and operating!' });
  });

  return app;
}