import { IFindAllUserController } from "./InterfaceFindAllUserController";
import { IFindAllUserService } from "./InterfaceFindAllUserService";

export class FindAllUserController implements IFindAllUserController {
  constructor(private readonly service: IFindAllUserService) {}
  async findAll(req: any, res: any): Promise<void> {
    const result = await this.service.findAll();
    res.status(result.statusCode).json(result.body);
  }
}
