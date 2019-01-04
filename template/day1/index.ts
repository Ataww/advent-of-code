import { readFileSync } from "fs";

function half1(frequencies: string[]) {
  // do half 1
  return 0;
}

function half2(frequencies: string[]) {
  // Do half 2
  return 0;
}

console.log("=== Day 1 ===");
const input = readFileSync("./input.txt", "utf8");
const frequencies = input.split(/[\r\n]+/g);
console.log(`half 1: ${half1(frequencies)}`);
console.log(`half 2: ${half2(frequencies)}`);
