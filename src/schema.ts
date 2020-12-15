import { BuildObject, TypesMap } from "./types";

type SourceStructure<T extends Record<any, any>> = {
  [K in keyof T]: T[K] extends Array<unknown>
    ? TypesMap[T[K][number]][]
    : T[K] extends Record<string, unknown>
    ? SourceStructure<T[K]>
    : TypesMap[T[K]];
};

export class Schema<T extends BuildObject = BuildObject> {
  constructor(schema: T) {}
  encode(input: SourceStructure<T>): Buffer {
    return Buffer.from("");
  }
  decode(input: Buffer): T {
    return {} as T;
  }
}
