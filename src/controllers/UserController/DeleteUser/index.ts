import { IDeleteUserController } from "./interfaces";
import { IDeleteUserService } from "../../../services/UserService/DeleteUser/interfaces";

export class DeleteUserController implements IDeleteUserController {
  constructor(private readonly service: IDeleteUserService) {}

  async delete(req: any, res: any): Promise<void> {
    const { id } = req.params;
    const result = await this.service.delete(id);
    res.status(result.statusCode).json(result.body);
  }
}
