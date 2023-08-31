import { FindAllUserController } from "./FindAllUserController";
import { FindAllUserService } from "./FindAllUserService";
import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";

const repository = new UserRepository();
const service = new FindAllUserService(repository);
const controller = new FindAllUserController(service);

export default controller;
