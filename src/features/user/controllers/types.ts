import { Request, Response } from 'express';

export default interface IUserController {
  listUsers: (req: Request, res: Response) => Promise<void>;
}