import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";
import { CreateUserService } from "./CreateUserService";
import { CreateUserController } from "./CreateUserController";

const repository = new UserRepository();
const service = new CreateUserService(repository);
const controller = new CreateUserController(service);

export default controller;
