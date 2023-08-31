import express from "express";
import "dotenv/config";
import cors from "cors";
import swaggerUI from "swagger-ui-express";

const app = express();

import UserRoutes from "./routes/UserRoutes";

import SwaggerDOC from "../swagger.json";
app.use("/docs", swaggerUI.serve, swaggerUI.setup(SwaggerDOC));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", UserRoutes);

app.use(cors({ origin: "*" }));

export default app;
