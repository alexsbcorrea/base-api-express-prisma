import * as I from "../../../entities/User/DTOs";
import { ICreateUserService } from "./interfaces";
import { IUserRepository } from "../../../entities/User/Interfaces";
import { UserEntity } from "../../../entities/User/UserEntity";

export class CreateUserService implements ICreateUserService {
  constructor(private readonly repository: IUserRepository) {}

  async create(data: Partial<I.User>): Promise<I.httpResponse> {
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

    if (!data.password) {
      return {
        statusCode: 422,
        body: "A Senha é obrigatória.",
      };
    }

    if (!data.confirmPassword) {
      return {
        statusCode: 422,
        body: "A Confirmação de Senha é obrigatória.",
      };
    }

    if (data.password != data.confirmPassword) {
      return {
        statusCode: 422,
        body: "As Senhas não correspondem.",
      };
    }

    const checkUser = await this.repository.findByEmail(data.email);

    if (checkUser) {
      return {
        statusCode: 422,
        body: "E-mail inválido, insira outro e-mail e tente novamente.",
      };
    }

    const finalData = new UserEntity(data.name, data.email, data.password);

    const user = await this.repository.create(finalData);

    if (user) {
      return {
        statusCode: 201,
        body: "Usuário cadastrado com sucesso.",
      };
    } else {
      return {
        statusCode: 500,
        body: "Erro interno, tente novamente mais tarde.",
      };
    }
  }
}
