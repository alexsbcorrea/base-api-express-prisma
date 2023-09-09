export interface ICache {
  setKey(
    key: string,
    value: any,
    duration?: number
  ): Promise<string | undefined>;
  getKey(key: string): Promise<any>;
  removeKey(key: string): Promise<string | undefined>;
}
