import { createClient } from "redis";
import { IRedisCache } from "./InterfaceRedisCache";
export const client = createClient({ url: process.env.REDIS_URL });

export class RedisCache implements IRedisCache {
  async setKey(
    key: string,
    value: any,
    duration: number
  ): Promise<string | undefined> {
    const data = await client.set(key, JSON.stringify(value), {
      EX: duration ? duration : 120,
    });
    if (data == "OK") {
      return "done";
    } else {
      return undefined;
    }
  }
  async getKey(key: string): Promise<any> {
    const data = await client.get(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return undefined;
    }
  }
  async removeKey(key: string): Promise<string | undefined> {
    const data = await client.del(key);
    if (data == 1) {
      return "done";
    } else {
      return undefined;
    }
  }
}
