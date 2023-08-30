import {
  CreateUser,
  GetUser,
  byEmail,
  byID,
  UpdateUser,
  User,
  httpResponse,
} from "../../../entities/User/DTOs";

export interface ICreateUserController {
  create(req: any, res: any): Promise<void>;
}
