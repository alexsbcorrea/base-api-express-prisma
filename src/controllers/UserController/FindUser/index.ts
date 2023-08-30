import { IFindUserController } from "./interfaces";
import { IFindUserService } from "../../../services/UserService/FindUser/interfaces";

export class FindUserController implements IFindUserController {
  constructor(private readonly service: IFindUserService) {}
  async findUser(req: any, res: any): Promise<void> {
    const { id } = req.params;
    const result = await this.service.get(id);
    res.status(result.statusCode).json(result.body);
  }
}
