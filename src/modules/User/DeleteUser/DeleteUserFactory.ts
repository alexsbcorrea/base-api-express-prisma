import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserService } from "./DeleteUserService";
import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";

const repository = new UserRepository();
const service = new DeleteUserService(repository);
const controller = new DeleteUserController(service);

export default controller;
