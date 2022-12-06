import { readInputAsArrayOfArrays } from "../parser/parser";

const input = readInputAsArrayOfArrays("./day-1/input.txt")

const addUpArray = (array: any[]) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + Number.parseInt(array[i]);
  }
  return total
}

export const elfTotals = input.map(elfList => addUpArray(elfList));

const highestTotal = elfTotals.sort((a: number, b: number) => b - a)[0]

console.log(highestTotal);
