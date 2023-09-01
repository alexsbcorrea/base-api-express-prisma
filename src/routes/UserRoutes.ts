import { Router } from "express";

import CreateUser from "../modules/User/CreateUser/CreateUserFactory";
import FindUser from "../modules/User/FindUser/FindUserFactory";
import FindAll from "../modules/User/FindAllUser/FindAllUserFactory";
import UpdateUser from "../modules/User/UpdateUser/UpdateUserFactory";
import DeleteUser from "../modules/User/DeleteUser/DeleteUserFactory";

import TokenValidation from "../middlewares/Token/TokenValidation";

const route = Router();

route.post("/", async (req, res) => {
  await CreateUser.create(req, res);
});
route.get("/:id", async (req, res) => {
  await FindUser.find(req, res);
});
route.get("/", async (req, res) => {
  await FindAll.findAll(req, res);
});
route.patch("/:id", async (req, res) => {
  await UpdateUser.update(req, res);
});
route.delete("/:id", async (req, res) => {
  await DeleteUser.delete(req, res);
});

export default route;
