// General types

let anything: any;
let bool: true | false;
let num: number;
let str: string;
let strArr: string[];
let unknown: unknown;
let never: never;
let callback: Promise<void>;
let noReturns: void;

// Literals

let f: 24 = 24;
let a: {
  id: number;
} = {
  id: 7,
};

//? Index signatures => idxSign debe ser un object con key tipo string y value string o number[].

export function indexSignatures(idxSign?: { [key: number]: string | number[] }): boolean {
  return idxSign ? true : false;
}

//? Enums

export enum TYPES {
  STRING,
  NUMBER,
  BOOLEAN,
  ARRAY,
}

//? Call signatures => Para funciones.

type Log = (msg?: string, userId?: number) => boolean;

// No es necesario pasarle argumentos acá, a menos que vayan a usarse y sí o sí deben coincidir con los de Log.
export const logFunction: Log = (msg?: string, userId?: number) => {
  return msg ? true : false;
};

// Utility types. Se usan para crear nuevos tipos a partir de otros.

export type TObject = Record<string, any>;
export type TAny = {
  [key: string]: number; // Esto también se le conoce como index signature.
};

// Creación de tipo que, a partir de un tipo que son requeridos, se le indican los que serán opcionales.
export type ObligatoriosTodos = {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
};

export type ConLosSiguientesOpcionales<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type DeepPartialWithArrays<T> = T extends (infer U)[]
  ? DeepPartialWithArrays<U>[]
  : T extends readonly (infer U)[]
  ? readonly DeepPartialWithArrays<U>[]
  : T extends {
      [key in keyof T]: T[key];
    }
  ? {
      [K in keyof T]?: DeepPartialWithArrays<T[K]>;
    }
  : T;
