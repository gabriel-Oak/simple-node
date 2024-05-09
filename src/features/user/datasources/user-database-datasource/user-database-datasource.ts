import { injectable } from "inversify";
import User from "../../entities/user";
import IUserDatabaseDatasource from "./types";

@injectable()
export default class UserDatabaseDatasource implements IUserDatabaseDatasource {
  async find() {
    const users = [
      new User({ id: 1, name: 'James', email: "jame@gmail.com" }),
      new User({ id: 2, name: 'James2', email: "jame2@gmail.com" }),
      new User({ id: 3, name: 'James3', email: "jame3@gmail.com" }),
    ];

    return users;
  }
}