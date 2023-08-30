import {
  CreateUser,
  GetUser,
  byEmail,
  byID,
  UpdateUser,
  User,
  httpResponse,
} from "../../../entities/User/DTOs";

export interface IGetUserController {
  get(req: any, res: any): Promise<void>;
}
