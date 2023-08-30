import * as I from "../../../entities/User/DTOs";

export interface IUpdateUserController {
  update(req: any, res: any): Promise<void>;
}
