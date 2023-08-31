import { IDeleteUserController } from "./InterfaceDeleteUserController";
import { IDeleteUserService } from "./InterfaceDeleteUserService";

export class DeleteUserController implements IDeleteUserController {
  constructor(private readonly service: IDeleteUserService) {}

  async delete(req: any, res: any): Promise<void> {
    const { id } = req.params;
    const result = await this.service.delete(id);
    res.status(result.statusCode).json(result.body);
  }
}
