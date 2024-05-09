import './datasources';
import './usecases';
import './controllers';

import { Router } from "express";
import createContainer from '../../utils/container';
import IUserController from './controllers/types';

const container = createContainer();
const controller = container.get<IUserController>('UserController');

export const userRoutes = Router();
userRoutes.get('/list', controller.listUsers);