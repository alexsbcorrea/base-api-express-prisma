import * as I from "../../../entities/User/DTOs";

export interface IFindAllUserController {
  findAll(req: any, res: any): Promise<void>;
}
