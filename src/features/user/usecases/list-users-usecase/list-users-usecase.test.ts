import { mock, mockReset } from "jest-mock-extended";
import IUserDatabaseDatasource from "../../datasources/user-database-datasource/types";
import ListUsersUsecase from "./list-users-usecase";
import IListUsersUsecase from "./types";
import User, { IUser } from "../../entities/user";

describe('ListUsersUsecase', () => {
  const datasourceMock = mock<IUserDatabaseDatasource>();
  const usecase: IListUsersUsecase = new ListUsersUsecase(datasourceMock);

  beforeEach(() => {
    mockReset(datasourceMock);
  });

  it('should list users', async () => {
    datasourceMock.find
      .mockImplementationOnce(async () => [new User(mock<IUser>())]);
    const result = await usecase.execute();
    expect(result).toBeInstanceOf(Array<User>);
    expect(result[0]).toBeInstanceOf(User);
  });
});