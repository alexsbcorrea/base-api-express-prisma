import * as I from "../../../entities/User/DTOs";

export interface IFindUserController {
  findUser(req: any, res: any): Promise<void>;
}
