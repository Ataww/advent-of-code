import { readFileSync } from "fs";

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

/**
 * For a given string find at least one count of two letters 
 * and/or one count of three letters, if any exist.
 * @param id 
 */
function computeMatches(id: string): Result {
  let two = 0;
  let three = 0;
  const matches: any = {};
  for (const c of id.split("")) {
    if (matches[c] === undefined) {
      matches[c] = 1;
    } else {
      matches[c] += 1;
    }
  }

  for (const key in matches) {
    if (matches[key] === 2) {
      two = 1;
      break;
    }
  }
  for (const key in matches) {
    if (matches[key] === 3) {
      three = 1;
      break;
    }
  }
  console.log(`${two} - ${three}`);
  return {
    two,
    three
  };
}

function half1(input: string[]) {
  const result = input.map(computeMatches).reduce((acc, e) => {
    return { two: acc.two + e.two, three: acc.three + e.three };
  });
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
