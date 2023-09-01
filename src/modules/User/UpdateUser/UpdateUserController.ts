import { IUpdateUserController } from "./InterfaceUpdateUserController";
import { IUpdateUserService } from "./InterfaceUpdateUserService";
import * as I from "../../../entities/User/DTOs";

export class UpdateUserController implements IUpdateUserController {
  constructor(private readonly service: IUpdateUserService) {}
  async update(req: any, res: any): Promise<void> {
    const { id } = req.params;
    const result = await this.service.update(id, req.body);
    res.status(result.statusCode).json(result.body);
  }

  async updateMock(req: any, res: any): Promise<I.httpResponse> {
    const { id } = req.params;
    const result = await this.service.update(id, req.body);
    return result;
  }
}
