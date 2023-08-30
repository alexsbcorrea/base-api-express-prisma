import * as I from "../../../entities/User/DTOs";
import { IUserRepository } from "../../../entities/User/Interfaces";
import { IFindAllUserService } from "./interfaces";

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
