import * as I from "../../../entities/User/DTOs";

export interface ICreateUserController {
  create(req: any, res: any): Promise<void>;
}
