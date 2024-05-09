import User from "../../entities/user";

export default interface IUserDatabaseDatasource {
  find: () => Promise<User[]>;
}