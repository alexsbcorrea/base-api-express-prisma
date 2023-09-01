import { IFindUserController } from "./InterfaceFindUserController";
import { IFindUserService } from "./InterfaceFindUserService";
import * as I from "../../../entities/User/DTOs";

export class FindUserController implements IFindUserController {
  constructor(private readonly service: IFindUserService) {}
  async find(req: any, res: any): Promise<void> {
    const { id } = req.params;
    const result = await this.service.find(id);
    res.status(result.statusCode).json(result.body);
  }

  async findMock(req: any, res: any): Promise<I.httpResponse> {
    const { id } = req.params;
    const result = await this.service.find(id);
    return result;
  }
}
