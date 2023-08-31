import * as I from "../../../entities/User/DTOs";

export interface IFindAllUserService {
  findAll(): Promise<I.httpResponse>;
}
