import { User, CreateUser, UpdateUser, GetUser, byID } from "../DTOs";

export interface IUserRepository {
  create(data: CreateUser): Promise<string | undefined>;
  get(id: byID): Promise<GetUser | undefined>;
  update(id: byID, data: UpdateUser): Promise<string | undefined>;
  delete(id: byID): Promise<string | undefined>;
  getall(): Promise<GetUser[] | []>;
  getByEmail(email: string): Promise<GetUser | undefined>;
}
