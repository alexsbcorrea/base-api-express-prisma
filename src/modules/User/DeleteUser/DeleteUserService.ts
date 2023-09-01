import * as I from "../../../entities/User/DTOs";
import { IDeleteUserService } from "./InterfaceDeleteUserService";
import { IUserRepository } from "../../../repositories/UserRepository/Prisma/interfaces";

export class DeleteUserService implements IDeleteUserService {
  constructor(private readonly repository: IUserRepository) {}

  async delete(id: I.byID): Promise<I.httpResponse> {
    const user = await this.repository.delete(id);
    if (!user) {
      return {
        statusCode: 500,
        body: "Erro interno, tente novamente mais tarde.",
      };
    }

    if (user == "NOT_FOUND") {
      return {
        statusCode: 404,
        body: "Usuário não encontrado.",
      };
    }

    return {
      statusCode: 200,
      body: "Usuário excluído com sucesso.",
    };
  }
}
