//? Recibir arrow functions como parámetros.

export function arrowFuncParam(
  id: string[],
  callbackfn: (i: string) => unknown
): boolean {
  id.forEach((x) => callbackfn(x));
  return true;
}

// Otro ejemplo.

export function times(f: (i: number) => void, n: number) {
  for (let idx = 0; idx < n; idx++) {
    f(idx);
  }
}

//? Funciones .filter() y .map()

type Filter = {
  <T>(array: T[], callbackfn: (item: T) => boolean): T[];
};

type MapFromScratch = {
  <T, U>(array: T[], callbackfn: (item: T) => U): U[];
};

export let filterFromScratch: Filter = (array, f) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (f(element)) {
      result.push(element);
    }
  }
  return result;
};

export let MapFromScratch: MapFromScratch = (array, f) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
};

//? Rest Parameters

export const potenciar = (exp: number, ...bases: number[]): number[] => {
  return bases.map((x) => x ** exp);
};
