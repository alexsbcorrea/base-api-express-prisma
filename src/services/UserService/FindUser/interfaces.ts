import * as I from "../../../entities/User/DTOs";

export interface IFindUserService {
  get(id: I.byID): Promise<I.httpResponse>;
}
