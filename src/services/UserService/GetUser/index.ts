import { IGetUserService } from "./interfaces";
import { IUserRepository } from "../../../entities/User/Interfaces";
import {
  CreateUser,
  GetUser,
  byEmail,
  byID,
  UpdateUser,
  User,
  httpResponse,
} from "../../../entities/User/DTOs";

export class GetUserService implements IGetUserService {
  constructor(private readonly repository: IUserRepository) {}
  async get(id: byID): Promise<httpResponse> {
    if (!id) {
      return {
        statusCode: 422,
        body: "O ID é obrigatório.",
      };
    }

    const user = await this.repository.get(id);

    if (!user) {
      return {
        statusCode: 404,
        body: "Usuário não encontrado.",
      };
    } else {
      return {
        statusCode: 200,
        body: user,
      };
    }
  }
}
