import { assertEquals } from "jsr:@std/assert/equals";
import { pairSum } from "./pairSum.ts";

Deno.test("[3, 2, 5, 4, 1], 8 => [0,2]", () => {
    const actual = pairSum([3, 2, 5, 4, 1], 8);
    assertEquals(actual, [0,2]);
});

Deno.test("[4, 7, 9, 2, 5, 1], 5 => [0,5]", () =>{
    const actual = pairSum([4, 7, 9, 2, 5, 1], 5);
    assertEquals(actual, [0,5]);
});

Deno.test("[4, 7, 9, 2, 5, 1], 3 => [3,5]", () => {
    const actual = pairSum([4, 7, 9, 2, 5, 1], 3);
    assertEquals(actual, [3,5]);
});

Deno.test("[1, 6, 7, 2], 13 => [1,2]", () => {
    const actual = pairSum([1, 6, 7, 2], 13);
    assertEquals(actual, [1,2]);
});

Deno.test("[9, 9], 18 => [0,1]", () => {
    const actual = pairSum([9, 9], 18);
    assertEquals(actual, [0,1]);
});

Deno.test("[6, 4, 2, 8 ], 12 => [1,3]", () => {
    const actual = pairSum([6, 4, 2, 8 ], 12);
    assertEquals(actual, [1,3]);
});


const nums : number[] = [];
for (let i = 0; i <= 30000; i += 1) {
  nums.push(i);
}
Deno.test("array with 30000, 59999 => [ 29999, 30000 ]", () => {
    const actual = pairSum(nums, 59999);
    assertEquals(actual, [ 29999, 30000 ]);
});