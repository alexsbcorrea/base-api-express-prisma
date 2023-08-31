import { ICreateUserController } from "./InterfaceCreateUserController";
import { ICreateUserService } from "./InterfaceCreateUserService";
import * as I from "../../../entities/User/DTOs";

export class CreateUserController implements ICreateUserController {
  constructor(private readonly service: ICreateUserService) {}

  async create(req: any, res: any): Promise<any> {
    const data = req.body;
    const result = await this.service.create(data);
    res.status(result.statusCode).json(result.body);
  }

  async createMock(req: any, res: any): Promise<I.httpResponse> {
    const data = req.body;
    const result = await this.service.create(data);
    return result;
  }
}
