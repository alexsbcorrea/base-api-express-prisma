import * as I from "../../../entities/User/DTOs";
import { IUserRepository } from "../../../repositories/UserRepository/Prisma/interfaces";
import { IFindAllUserService } from "./InterfaceFindAllUserService";

export class FindAllUserService implements IFindAllUserService {
  constructor(private readonly repository: IUserRepository) {}

  async findAll(): Promise<I.httpResponse> {
    const users = await this.repository.findAll();

    return {
      statusCode: 200,
      body: users,
    };
  }
}