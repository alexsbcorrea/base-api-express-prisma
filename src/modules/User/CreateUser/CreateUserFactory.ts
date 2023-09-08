import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";
import { CreateUserService } from "./CreateUserService";
import { CreateUserController } from "./CreateUserController";
import { RedisCache } from "../../../cache/Redis/RedisCache";

const redis = new RedisCache();
const repository = new UserRepository();
const service = new CreateUserService(repository, redis);
const controller = new CreateUserController(service);

export default controller;
