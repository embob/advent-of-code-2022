import path from "path";
import { readInputAsArraySplitByBlankLines } from "../parser/parser"

const input = [...readInputAsArraySplitByBlankLines(path.join(__dirname, 'input.txt'))];

export const [diagram, instructions] = input;

export const setupCrateStacks = (diagram: string) => {
  const diagramSplitIntoRows = diagram.split('\n').map(line => line.match(/.{1,4}/g)?.map(item => item.replace(/\s+/g, ""))).slice(0, -1);
  return diagramSplitIntoRows.reduce((acc: any, curr: any, currentIndex: number) => {
    curr.forEach((item: string, currentIndex: number) => {
      if (item.length) {
        const formattedItem = item.replace(/[^A-Z]/g, '');
        acc[currentIndex].push(formattedItem);
      }
    });
    return acc
  }, new Array(diagramSplitIntoRows[0]?.length).fill(null).map(() => []))
}

const crateStacks = setupCrateStacks(diagram);



const formatInstructions = (instructions: string) => instructions.split('\n')
  .map(instruction => instruction.split(' ').map(part => Number.parseInt(part)).filter(value => value > 0));

const formattedInstructions = formatInstructions(instructions);


export const processInstructions = (crateStacks: string[][], cratesMoveSeparately: boolean) => {
  formattedInstructions.forEach(instruction => {
    const [amountToMove, moveFrom, moveTo] = instruction;
    const cratesToMove = crateStacks[moveFrom - 1].splice(0, amountToMove);
    const orderedCratesToMove = cratesMoveSeparately ? cratesToMove.slice().reverse() : cratesToMove
    const stackToMoveTo = crateStacks[moveTo - 1];
    stackToMoveTo.unshift(...orderedCratesToMove);
  })
  return crateStacks;
}

const stackTops = processInstructions(crateStacks, true).map((crate) => crate[0]).join('');


console.log("stacktops1", stackTops);
