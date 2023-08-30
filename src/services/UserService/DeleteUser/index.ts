import * as I from "../../../entities/User/DTOs";
import { IDeleteUserService } from "./interfaces";
import { IUserRepository } from "../../../entities/User/Interfaces";

export class DeleteUserService implements IDeleteUserService {
  constructor(private readonly repository: IUserRepository) {}

  async delete(id: I.byID): Promise<I.httpResponse> {
    const user = await this.repository.delete(id);
    if (!user) {
      return {
        statusCode: 500,
        body: "Erro interno, tente novamente mais tarde.",
      };
    } else {
      return {
        statusCode: 200,
        body: "Usuário excluído com sucesso.",
      };
    }
  }
}
