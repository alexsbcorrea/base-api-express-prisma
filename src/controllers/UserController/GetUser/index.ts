import { IGetUserController } from "./interfaces";
import { IGetUserService } from "../../../services/UserService/GetUser/interfaces";

export class GetUserController implements IGetUserController {
  constructor(private readonly service: IGetUserService) {}
  async get(req: any, res: any): Promise<void> {
    const { id } = req.params;
    const result = await this.service.get(id);
    res.status(result.statusCode).json(result.body);
  }
}
