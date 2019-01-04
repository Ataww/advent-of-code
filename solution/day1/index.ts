import { readFileSync } from "fs";

function half1(frequencies: number[]) {
  return frequencies.reduce((acc, e) => acc + e, 0);
}

function half2(frequencies: number[]) {
  const visited: number[] = [];
  let value = 0;
  while (true) {
    for (const freq of frequencies) {
      value += freq;
      if (visited.indexOf(value) > -1) {
        return value;
      }
      visited.push(value);
    }
  }
}

console.log("=== Day 1 ===");
const input = readFileSync("./input.txt", "utf8");
const frequencies = input.split(/[\r\n]+/g).map(Number);
console.log(`half 1: ${half1(frequencies)}`);
console.log(`half 2: ${half2(frequencies)}`);
