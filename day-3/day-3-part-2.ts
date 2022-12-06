import { createPriorityLevelList, findDuplicateItems, input, sum} from "./day-3-part-1";

const formGroupsOfThree = () => {
  const groupsOfThree: string[][] = [];
  for (let index = 0, amount = 3; index < input.length; index += 3, amount += 3) {
    groupsOfThree.push(input.slice(index, amount));
  }
  return groupsOfThree;
}

const groups = formGroupsOfThree();
const duplicateItemList = findDuplicateItems(groups);

console.log(sum(createPriorityLevelList(duplicateItemList)));