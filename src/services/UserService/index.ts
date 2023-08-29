import { User, PartialUser, byID } from "../../entities/User/DTOs";
import { IUserService, IUserRepository } from "../../entities/User/Interfaces";

export class UserService implements IUserService {
  constructor(private readonly repository: IUserRepository) {}
  async create(data: PartialUser): Promise<[number, string]> {
    if (!data) {
      return [422, "Preencha todos os campos obrigatórios."];
    }

    if (!data.name) {
      return [422, `O campo Nome é obrigatório.`];
    }

    if (!data.email) {
      return [422, `O campo E-mail é obrigatório.`];
    }

    if (!data.password) {
      return [422, `O campo Senha é obrigatório.`];
    }
    return [422, `O campo Senha é obrigatório.`];
  }
  async get(id: byID): Promise<string | undefined> {}
  async update(id: byID, data: PartialUser): Promise<string | undefined> {}
  async delete(id: byID): Promise<string | undefined> {}
  async getall(): Promise<string | undefined> {}
}
