import path from "path";
import { readInputAsArray} from "../parser/parser"

export const input = readInputAsArray(path.join(__dirname, 'input.txt'));

export const shapeScores: { [char: string]: number} = {
  'X': 1,
  'Y': 2,
  'Z': 3,
}

const roundScores: {[char: string]: number} = {
  'A X': 3,
  'A Y': 6,
  'B Y': 3,
  'B Z': 6,
  'C X': 6,
  'C Z': 3,
}

const roundScore = (strategy: string) => roundScores[strategy] ? roundScores[strategy] : 0;


const calculateScore = (strategy: string) => {
  const [_, me] = strategy.split(' ');
  return shapeScores[me] + roundScore(strategy);
}

export const calculateScoreTotal = (input: string[]) => input.reduce((acc, curr) => {
  const currScore = calculateScore(curr);
  return acc += currScore;
}, 0);

const total = calculateScoreTotal(input);
console.log("total", total);
