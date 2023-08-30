import { ICreateUserController } from "./interfaces";
import { IUserRepository } from "../../../entities/User/Interfaces";
import { ICreateUserService } from "../../../services/UserService/CreateUser/interfaces";

export class CreateUserController implements ICreateUserController {
  constructor(
    private readonly service: ICreateUserService,
    private readonly repository: IUserRepository
  ) {}
  async create(req: any, res: any): Promise<void> {
    const data = req.body;
    const result = await this.service.create(data);
    res.status(result.statusCode).json(result.body);
  }
}
