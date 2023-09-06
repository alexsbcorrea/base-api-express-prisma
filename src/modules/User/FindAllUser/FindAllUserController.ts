import { IFindAllUserController } from "./InterfaceFindAllUserController";
import { IFindAllUserService } from "./InterfaceFindAllUserService";
import * as I from "../../../entities/User/DTOs";

export class FindAllUserController implements IFindAllUserController {
  constructor(private readonly service: IFindAllUserService) {}
  async findAll(req: any, res: any): Promise<void> {
    const result = await this.service.findAll();
    res.status(result.statusCode).json(result.body);
  }

  async findAllMock(req: any, res: any): Promise<I.httpResponse> {
    const result = await this.service.findAll();
    return result;
  }
}
