import * as I from "../../../entities/User/DTOs";

export interface IDeleteUserController {
  delete(req: any, res: any): Promise<void>;
}
