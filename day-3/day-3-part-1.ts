import path from "path";
import { readInputAsArray } from "../parser/parser"

export const input = readInputAsArray(path.join(__dirname, 'input.txt'));

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const rucksacks = input.map(row => {
  const halfwayPoint = row.length / 2;
  return [row.slice(0, halfwayPoint), row.slice(halfwayPoint, row.length)]
})

export const findDuplicateItems = (group: string[][]) => {
  return group.map((rucksack) => {
    const groupWithItemsSplit = rucksack.map(section => section.split(''));
    const firstRucksack = [...groupWithItemsSplit[0]]
    const allRucksacksWithoutFirst = groupWithItemsSplit.slice(1, rucksack.length);
    const itemMatches = firstRucksack.filter(item => {
      return allRucksacksWithoutFirst.every((collection) => {
        return collection.includes(item)
      })
    })
    return Array.from(new Set(itemMatches));
  }).flat()
}


export const createPriorityLevelList = (list: string[]) => list.map(item => {
  const letterIndex = alphabet.indexOf(item.toLowerCase()) + 1;
  const isUppercase = (letter: string) => /[A-Z]/.test(letter);
  return isUppercase(item) ? letterIndex + 26 : letterIndex;
})

export const sum = (list: number[]) => list.reduce((acc, curr) => {
  return acc += curr
}, 0);

const duplicateItemsList = findDuplicateItems(rucksacks);
console.log("sum , sum", sum(createPriorityLevelList(duplicateItemsList)));
