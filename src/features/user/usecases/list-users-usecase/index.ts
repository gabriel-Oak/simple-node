import createContainer from "../../../../utils/container";
import ListUsersUsecase from "./list-users-usecase";
import IListUsersUsecase from "./types";

const container = createContainer();
container
  .bind<IListUsersUsecase>('ListUsersUsecase')
  .to(ListUsersUsecase);