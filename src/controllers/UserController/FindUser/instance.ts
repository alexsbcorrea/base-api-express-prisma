import { FindUserController } from ".";
import { FindUserService } from "../../../services/UserService/FindUser";
import { UserRepository } from "../../../repositories/UserRepository";

const repository = new UserRepository();
const service = new FindUserService(repository);
const controller = new FindUserController(service);

export default controller;
