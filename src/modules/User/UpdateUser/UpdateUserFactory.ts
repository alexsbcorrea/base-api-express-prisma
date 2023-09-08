import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserService } from "./UpdateUserService";
import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";
import { RedisCache } from "../../../cache/Redis/RedisCache";

const redis = new RedisCache();
const repository = new UserRepository();
const service = new UpdateUserService(repository, redis);
const controller = new UpdateUserController(service);

export default controller;
