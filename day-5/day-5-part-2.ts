import { processInstructions, setupCrateStacks, diagram } from "./day-5-part-1";

const crateStacks = setupCrateStacks(diagram);


const stackTops = processInstructions(crateStacks, false).map((crate) => crate[0]).join('');

console.log('stacktops2', stackTops);