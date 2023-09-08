import app from "./app";
import { client } from "./cache/Redis/RedisCache";

const port = process.env.PORT || 3002;

async function connectServers() {
  await client.connect().then(() => {
    console.log("Redis rodando na porta 6379");
  });
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}
connectServers();
