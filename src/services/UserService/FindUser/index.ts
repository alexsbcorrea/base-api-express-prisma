import * as I from "../../../entities/User/DTOs";
import { IFindUserService } from "./interfaces";
import { IUserRepository } from "../../../entities/User/Interfaces";

export class FindUserService implements IFindUserService {
  constructor(private readonly repository: IUserRepository) {}

  async get(id: I.byID): Promise<I.httpResponse> {
    if (!id) {
      return {
        statusCode: 422,
        body: "O ID é obrigatório.",
      };
    }

    const user = await this.repository.findUser(id);

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