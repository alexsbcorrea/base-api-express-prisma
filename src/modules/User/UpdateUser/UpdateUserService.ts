import * as I from "../../../entities/User/DTOs";
import { IUpdateUserService } from "./InterfaceUpdateUserService";
import { IUserRepository } from "../../../repositories/UserRepository/Prisma/interfaces";

export class UpdateUserService implements IUpdateUserService {
  constructor(private readonly repository: IUserRepository) {}

  async update(id: I.byID, data: Partial<I.User>): Promise<I.httpResponse> {
    if (!id) {
      return {
        statusCode: 422,
        body: "O ID é obrigatório.",
      };
    }
    if (!data.name) {
      return {
        statusCode: 422,
        body: "O Nome é obrigatório.",
      };
    }

    if (!data.email) {
      return {
        statusCode: 422,
        body: "O E-mail é obrigatório.",
      };
    }

    if (data.password && data.confirmPassword) {
      if (data.password != data.confirmPassword) {
        return {
          statusCode: 422,
          body: "As Senhas não correspondem.",
        };
      }
    } else {
      return {
        statusCode: 422,
        body: "É necessário fornecer a Senha e a Confirmação de Senha.",
      };
    }

    const checkUser = await this.repository.findUser(id);

    if (!checkUser) {
      return {
        statusCode: 404,
        body: "Usuário não encontrado.",
      };
    }

    if (data.password && data.confirmPassword) {
      const obj = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const user = await this.repository.update(id, obj);
      if (!user) {
        return {
          statusCode: 500,
          body: "Erro interno. Tente novamente mais tarde.",
        };
      }
      return {
        statusCode: 200,
        body: "Usuário atualizado com sucesso.",
      };
    } else {
      const obj = {
        name: data.name,
        email: data.email,
        password: checkUser.password,
      };
      const user = await this.repository.update(id, obj);
      if (!user) {
        return {
          statusCode: 500,
          body: "Erro interno. Tente novamente mais tarde.",
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
        body: "Usuário atualizado com sucesso.",
      };
    }
  }
}
