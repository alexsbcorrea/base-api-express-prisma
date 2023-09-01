import { IDeleteUserController } from "./InterfaceDeleteUserController";
import { IDeleteUserService } from "./InterfaceDeleteUserService";
import * as I from "../../../entities/User/DTOs";

export class DeleteUserController implements IDeleteUserController {
  constructor(private readonly service: IDeleteUserService) {}

  async delete(req: any, res: any): Promise<void> {
    const { id } = req.params;
    const result = await this.service.delete(id);
    res.status(result.statusCode).json(result.body);
  }

  async deleteMock(req: any, res: any): Promise<I.httpResponse> {
    const { id } = req.params;
    const result = await this.service.delete(id);
    return result;
  }
}
