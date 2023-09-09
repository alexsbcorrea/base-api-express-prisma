import { createClient } from "redis";
import { ICache } from "../Interface/InterfaceCache";
export const client = createClient({ url: process.env.REDIS_URL });

export class RedisCache implements ICache {
  async setKey(
    key: string,
    value: any,
    duration: number
  ): Promise<string | undefined> {
    try {
      const data = await client.set(key, JSON.stringify(value), {
        EX: duration ? duration : 120,
      });
      return "done";
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  async getKey(key: string): Promise<any> {
    try {
      const data = await client.get(key);
      if (data) {
        return JSON.parse(data);
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  async removeKey(key: string): Promise<string | undefined> {
    try {
      const data = await client.del(key);
      return "done";
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}
