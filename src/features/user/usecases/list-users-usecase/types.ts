import User from "../../entities/user";

export default interface IListUsersUsecase {
  execute: () => Promise<User[]>;
}