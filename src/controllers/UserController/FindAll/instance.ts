import { FindAllUserController } from ".";
import { FindAllUserService } from "../../../services/UserService/FindAll";
import { UserRepository } from "../../../repositories/UserRepository";

const repository = new UserRepository();
const service = new FindAllUserService(repository);
const controller = new FindAllUserController(service);

export default controller;
