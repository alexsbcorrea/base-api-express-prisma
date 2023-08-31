import { FindUserController } from "./FindUserController";
import { FindUserService } from "./FindUserService";
import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";

const repository = new UserRepository();
const service = new FindUserService(repository);
const controller = new FindUserController(service);

export default controller;
