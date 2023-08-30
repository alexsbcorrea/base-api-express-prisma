import { IUpdateUserController } from "./interfaces";
import { IUpdateUserService } from "../../../services/UserService/UpdateUser/interfaces";

export class UpdateUserController implements IUpdateUserController {
  constructor(private readonly service: IUpdateUserService) {}
  async update(req: any, res: any): Promise<void> {
    const { id } = req.params;
    const result = await this.service.update(id, req.body);
    res.status(result.statusCode).json(result.body);
  }
}
