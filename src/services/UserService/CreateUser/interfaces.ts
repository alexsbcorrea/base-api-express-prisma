import {
  User,
  CreateUser,
  UpdateUser,
  GetUser,
  byID,
  byEmail,
  httpResponse,
} from "../../../entities/User/DTOs";

export interface ICreateUserService {
  create(data: Partial<User>): Promise<httpResponse>;
}
