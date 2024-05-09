import User from "../../entities/user";
import IUserDatabaseDatasource from "./types";
import UserDatabaseDatasource from "./user-database-datasource";

describe('UserDatabaseDatasource Tests', () => {
  const datasource: IUserDatabaseDatasource = new UserDatabaseDatasource();

  it('should return users', async() => {
    const result = await datasource.find();
    expect(result).toBeInstanceOf(Array<User>);
    expect(result[0]).toBeInstanceOf(User);
  });
});