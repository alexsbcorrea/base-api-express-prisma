import * as I from "../../../entities/User/DTOs";

export interface IFindUserService {
  find(id: I.byID): Promise<I.httpResponse>;
}
