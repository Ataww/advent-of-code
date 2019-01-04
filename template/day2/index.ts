import { readFileSync } from "fs";

/**
 * Count result
 */
interface Result {
  /**
   * Count of two letters groups
   */
  two: number;
  /**
   * Count of three letters groups
   */
  three: number;
}

function half1(input: string[]) {
  // Do half 1
  const result: Result = { two: 0, three: 0 };
  return result.two * result.three;
}

function half2(input: string[]) {
  // Do half 2
  const result: Result = { two: 0, three: 0 };
  return result.two * result.three;
}

console.log("=== Day 2 ===");
const input = readFileSync("./input.txt", "utf8");
const ids = input.split(/[\r\n]+/g);
console.log(`Checksum first half - ${half1(ids)}`);
console.log(`Second half - ${half2(ids)}`);
