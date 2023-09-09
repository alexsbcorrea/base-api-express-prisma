export interface Payload {
  id: string;
  name: string;
  email: string;
}

export interface ITokenGenerate {
  execute(data: Payload): Promise<string | undefined>;
}
