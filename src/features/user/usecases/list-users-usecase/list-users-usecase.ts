import { inject, injectable } from "inversify";
import IUserDatabaseDatasource from "../../datasources/user-database-datasource/types";
import IListUsersUsecase from "./types";

@injectable()
export default class ListUsersUsecase implements IListUsersUsecase {
  constructor(
    @inject('UserDatabaseDatasource')
    private readonly userDatabaseDatasource: IUserDatabaseDatasource
  ) {}
  
  async execute() {
    const users = await this.userDatabaseDatasource.find();
    return users;
  }
}