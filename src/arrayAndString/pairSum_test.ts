import { pairSum } from "./pairSum.ts";
import { expect } from "jsr:@std/expect";

Deno.test("expect [3, 2, 5, 4, 1], 8 to return [0, 2]", () => {
    const actual = pairSum([3, 2, 5, 4, 1], 8);
    const expected: number[] = [0,2];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("expect [4, 7, 9, 2, 5, 1], 5 to return [0, 5]", () => {
    const actual = pairSum([4, 7, 9, 2, 5, 1], 5);
    const expected: number[] = [0, 5];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("expect [4, 7, 9, 2, 5, 1], 3 to return [3, 5]", () => {
    const actual = pairSum([4, 7, 9, 2, 5, 1], 3);
    const expected: number[] = [3,5];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("expect [1, 6, 7, 2], 13 to return [1,2]", () =>{
    const actual = pairSum([1, 6, 7, 2], 13);
    const expected: number[] = [1,2];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("expect [6, 4, 2, 8 ], 12 to return [1,3]", () => {
    const actual = pairSum([6, 4, 2, 8 ], 12);
    const expected: number[] = [1,3];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("expect [...30000], 559999 to return [ 29999, 30000 ]", () => {
    const numbers: number[] = []
    for (let i = 0; i <= 30000; i ++) {
        numbers.push(i);
      }
    const actual = pairSum(numbers, 59999);
    const expected: number[] = [29999, 30000];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});