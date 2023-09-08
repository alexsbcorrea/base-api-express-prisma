import * as I from "../../../entities/User/DTOs";
import { IUserRepository } from "../../../repositories/UserRepository/Prisma/interfaces";
import { IFindAllUserService } from "./InterfaceFindAllUserService";
import { IRedisCache } from "../../../cache/Redis/InterfaceRedisCache";

export class FindAllUserService implements IFindAllUserService {
  constructor(
    private readonly repository: IUserRepository,
    private readonly redis: IRedisCache
  ) {}

  async findAll(): Promise<I.httpResponse> {
    const cacheUsers = await this.redis.getKey("findAllUsers");

    if (cacheUsers) {
      return {
        statusCode: 200,
        body: { users: cacheUsers, cached: true },
      };
    }

    const users = await this.repository.findAll();

    if (users.length == 0) {
      return {
        statusCode: 404,
        body: users,
      };
    }

    await this.redis.setKey("findAllUsers", users);

    return {
      statusCode: 200,
      body: users,
    };
  }
}
