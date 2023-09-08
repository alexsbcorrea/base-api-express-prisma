import { FindAllUserController } from "./FindAllUserController";
import { FindAllUserService } from "./FindAllUserService";
import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";
import { RedisCache } from "../../../cache/Redis/RedisCache";

const redis = new RedisCache();
const repository = new UserRepository();
const service = new FindAllUserService(repository, redis);
const controller = new FindAllUserController(service);

export default controller;
