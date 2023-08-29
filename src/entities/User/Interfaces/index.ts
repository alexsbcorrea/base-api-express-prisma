import { User, PartialUser, byID } from "../DTOs";

export interface IUserController {
  create(req: any, res: any): Promise<[number, string]>;
  get(req: any, res: any): Promise<string | undefined>;
  update(req: any, res: any): Promise<string | undefined>;
  delete(req: any, res: any): Promise<string | undefined>;
  getall(req: any, res: any): Promise<string | undefined>;
}

export interface IUserService {
  create(data: PartialUser): Promise<[number, string]>;
  get(id: byID): Promise<string | undefined>;
  update(id: byID, data: PartialUser): Promise<string | undefined>;
  delete(id: byID): Promise<string | undefined>;
  getall(): Promise<string | undefined>;
}

export interface IUserRepository {
  create(data: PartialUser): Promise<string | undefined>;
  get(id: byID): Promise<User | undefined>;
  update(id: byID, data: PartialUser): Promise<string | undefined>;
  delete(id: byID): Promise<string | undefined>;
  getall(): Promise<User[] | undefined>;
}
