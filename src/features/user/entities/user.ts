export interface IUser {
  id: number;
  name: string;
  email: string;
}

export default class User {
  id!: number;
  name!: string;
  email!: string;

  constructor({ id, name, email }: IUser) {
    Object.assign(this, { id, name, email });
  }
}