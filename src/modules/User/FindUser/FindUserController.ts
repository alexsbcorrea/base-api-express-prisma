import { IFindUserController } from "./InterfaceFindUserController";
import { IFindUserService } from "./InterfaceFindUserService";

export class FindUserController implements IFindUserController {
  constructor(private readonly service: IFindUserService) {}
  async findUser(req: any, res: any): Promise<void> {
    const { id } = req.params;
    const result = await this.service.get(id);
    res.status(result.statusCode).json(result.body);
  }
}
