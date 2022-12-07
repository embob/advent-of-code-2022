import path from "path";
import { readInputAsArray } from "../parser/parser"

export const input = readInputAsArray(path.join(__dirname, 'input.txt'));

export const elfPairs = input.map((pair) => {
  return pair.split(',').map(elf => elf.split('-').map(Number));
})

export const totalOverlapCount = (totalOverlap: boolean) => elfPairs.reduce((acc, curr) => {
  const [firstElf, secondElf] = curr;

  const calculateSectionSize = (elf: number[]) => {
    return elf[1] - elf[0];
  }
  const biggestSection = calculateSectionSize(firstElf) >= calculateSectionSize(secondElf) ? firstElf : secondElf;
  const [biggestStart, biggestEnd] = biggestSection;
  const [smallestStart, smallestEnd] = curr.filter(elf => elf !== biggestSection).flat();
  const ifTotalOverlap = (smallestStart >= biggestStart && smallestEnd <= biggestEnd)
  const ifPartialOverlap = (smallestStart >= biggestStart && smallestStart <= biggestEnd) || (smallestEnd <= biggestEnd && smallestEnd >= biggestStart);
  (totalOverlap) ? (ifTotalOverlap && acc++) : (ifPartialOverlap && acc++)
  return acc;
}, 0)


console.log(totalOverlapCount(true));
