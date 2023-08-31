import * as I from "../../../entities/User/DTOs";

export interface IDeleteUserService {
  delete(id: I.byID): Promise<I.httpResponse>;
}
