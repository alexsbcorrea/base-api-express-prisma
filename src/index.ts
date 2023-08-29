import express from "express";
import "dotenv/config";
import cors from "cors";
import swaggerUI from "swagger-ui-express";

const app = express();
const port = process.env.PORT || 3002;

import SwaggerDOC from "../swagger.json";
app.use("/docs", swaggerUI.serve, swaggerUI.setup(SwaggerDOC));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
