export interface TypesMap {
  bool: boolean;
  boolean: boolean;
  int8: number;
  uint8: number;
  int16: number;
  uint16: number;
  int32: number;
  uint32: number;
  float32: number;
  float64: number;
  string: string;
  varuint: number;
  varint: number;
  buffer: Buffer;
}

export type Types = keyof TypesMap;

export type BuildObject<T = any> = {
  [K in keyof T]: T[K] extends string
    ? Types
    : T[K] extends Array<any>
    ? (Types | BuildObject<T>)[]
    : BuildObject<T>;
};
