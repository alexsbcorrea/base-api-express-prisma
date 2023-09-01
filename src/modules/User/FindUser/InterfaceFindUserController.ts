import * as I from "../../../entities/User/DTOs";

export interface IFindUserController {
  find(req: any, res: any): Promise<void>;
}
