import * as I from "../../../entities/User/DTOs";

export interface IUpdateUserService {
  update(id: I.byID, data: Partial<I.User>): Promise<I.httpResponse>;
}
