import * as I from "../../../entities/User/DTOs";

export interface ICreateUserService {
  create(data: Partial<I.User>): Promise<I.httpResponse>;
}
