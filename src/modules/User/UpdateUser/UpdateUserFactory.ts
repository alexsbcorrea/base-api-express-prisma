import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserService } from "./UpdateUserService";
import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";

const repository = new UserRepository();
const service = new UpdateUserService(repository);
const controller = new UpdateUserController(service);

export default controller;
