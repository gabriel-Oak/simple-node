import createContainer from "../../../utils/container";
import IUserController from "./types";
import UserController from "./user-controller";

const container = createContainer();
container
  .bind<IUserController>('UserController')
  .to(UserController);