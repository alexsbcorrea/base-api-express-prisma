import * as I from "../../../entities/User/DTOs";
import { IUserRepository } from "../../../repositories/UserRepository/Prisma/interfaces";
import { IFindAllUserService } from "./InterfaceFindAllUserService";
import { ICache } from "../../../cache/Interface/InterfaceCache";

export class FindAllUserService implements IFindAllUserService {
  constructor(
    private readonly repository: IUserRepository,
    private readonly cache: ICache
  ) {}

  async findAll(): Promise<I.httpResponse> {
    const cacheUsers = await this.cache.getKey("findAllUsers");

    if (cacheUsers) {
      return {
        statusCode: 200,
        body: { users: cacheUsers, fromCache: true },
      };
    }

    const users = await this.repository.findAll();

    if (users.length == 0) {
      return {
        statusCode: 404,
        body: "Nenhum usuário encontrado.",
      };
    }

    await this.cache.setKey("findAllUsers", users);

    return {
      statusCode: 200,
      body: { users, fromCache: false },
    };
  }
}
