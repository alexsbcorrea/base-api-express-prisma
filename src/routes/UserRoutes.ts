import { Router } from "express";
import CreateUserController from "../controllers/UserController/CreateUser/instance";
import GetUserController from "../controllers/UserController/GetUser/instances";
import TokenValidation from "../middlewares/Token/TokenValidation";

const route = Router();

route.post("/", async (req, res) => {
  await CreateUserController.create(req, res);
});
route.get("/:id", TokenValidation.execute, async (req, res) => {
  await GetUserController.get(req, res);
});

export default route;
