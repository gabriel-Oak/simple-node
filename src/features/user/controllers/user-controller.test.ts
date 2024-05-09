import { mock, mockReset } from "jest-mock-extended";
import IUserController from "./types";
import UserController from "./user-controller";
import IListUsersUsecase from "../usecases/list-users-usecase/types";
import { Request, Response } from "express";
import User, { IUser } from "../entities/user";

describe('UserController', () => { 
  const listUsersUsecase = mock<IListUsersUsecase>();
  const reqMock = mock<Request>();
  const resMock = mock<Response>();

  const controller: IUserController = new UserController(listUsersUsecase);

  beforeEach(() => {
    mockReset(reqMock);
    mockReset(resMock);
    mockReset(listUsersUsecase);

    resMock.status.mockReturnThis();
  });

  it('should return users', async () => {
    const dataMock = [new User(mock<IUser>())];
    listUsersUsecase.execute
      .mockImplementationOnce(async () => dataMock);
    await controller.listUsers(reqMock, resMock);

    expect(resMock.json).toHaveBeenCalledWith(dataMock);
  })
 });