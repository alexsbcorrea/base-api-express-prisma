import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserService } from "./DeleteUserService";
import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";
import { RedisCache } from "../../../cache/Redis/RedisCache";

const redis = new RedisCache();
const repository = new UserRepository();
const service = new DeleteUserService(repository, redis);
const controller = new DeleteUserController(service);

export default controller;
