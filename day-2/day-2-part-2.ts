import { input, calculateScoreTotal } from './day-2-part-1'

const calculateShape = (strategy: string) => {
  const [opponent, outcome] = strategy.split(' ');
  if (outcome === 'Y') {
    if (opponent === 'A') return `${opponent} X`
    if (opponent === 'B') return `${opponent} Y`
    if (opponent === 'C') return `${opponent} Z`
  }
  if (outcome === 'X') {
    if (opponent === 'A') return `${opponent} Z`
    if (opponent === 'B') return `${opponent} X`
    if (opponent === 'C') return `${opponent} Y`
  }
  if (outcome === 'Z') {
    if (opponent === 'A') return `${opponent} Y`
    if (opponent === 'B') return `${opponent} Z`
    if (opponent === 'C') return `${opponent} X`
  }
  return 'invalid match'
}

const convertedOutcomes = input.map(row => calculateShape(row));

const total = calculateScoreTotal(convertedOutcomes);
console.log("total", total);
