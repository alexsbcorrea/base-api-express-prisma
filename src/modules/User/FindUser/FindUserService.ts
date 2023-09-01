import * as I from "../../../entities/User/DTOs";
import { IFindUserService } from "./InterfaceFindUserService";
import { IUserRepository } from "../../../repositories/UserRepository/Prisma/interfaces";

export class FindUserService implements IFindUserService {
  constructor(private readonly repository: IUserRepository) {}

  async find(id: I.byID): Promise<I.httpResponse> {
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
