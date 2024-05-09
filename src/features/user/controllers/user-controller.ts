import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IUserController from "./types";
import IListUsersUsecase from '../usecases/list-users-usecase/types';
import { inject, injectable } from "inversify";

@injectable()
export default class UserController implements IUserController {
  constructor(
    @inject('ListUsersUsecase')
    private readonly listUsersUsecase: IListUsersUsecase
  ) { 
    this.listUsers = this.listUsers.bind(this);
   }

  async listUsers(req: Request, res: Response) {
    const users = await this.listUsersUsecase.execute();
    res.json(users);
  }
}