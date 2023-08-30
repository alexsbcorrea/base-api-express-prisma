import {
  User,
  CreateUser,
  UpdateUser,
  GetUser,
  byID,
  byEmail,
  httpResponse,
} from "../../../entities/User/DTOs";

export interface IGetUserService {
  get(id: byID): Promise<httpResponse>;
}
