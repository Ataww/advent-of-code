import { readFileSync } from "fs";

function half1(frequencies: string[]) {
  let value = 0;
  for (let freq of frequencies) {
    value += Number(freq);
  }
  return value;
}

function half2(frequencies: string[]) {
  const visited: number[] = [];
  let value = 0;
  for (let i = 0;; i++) {
    for (let freq of frequencies) {
      value += Number(freq);
      if (visited.filter(e => e === value).length > 0) {
        return value;
      }
      visited.push(value);
    }
  }
}

console.log("=== Day 1 ===");
const input = readFileSync("./input.txt", "utf8");
const frequencies = input.split(/[\r\n]+/g);
console.log(`half 1: ${half1(frequencies)}`);
console.log(`half 2: ${half2(frequencies)}`);
