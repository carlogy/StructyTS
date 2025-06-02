import { assertEquals } from "jsr:@std/assert/equals";
import { pairProduct } from "./pairProduct.ts";

Deno.test("[3, 2, 5, 4, 1], 8 => [1,3]", () => {
    const actual = pairProduct([3, 2, 5, 4, 1], 8);
    assertEquals(actual,[1,3]);
});

Deno.test("[3, 2, 5, 4, 1], 10 => [1,2]", () => {
    const actual = pairProduct([3, 2, 5, 4, 1], 10);
    assertEquals(actual, [1,2]);
});

Deno.test("[4, 7, 9, 2, 5, 1], 5 => [4,5]", () => {
    const actual = pairProduct([4, 7, 9, 2, 5, 1], 5);
    assertEquals(actual, [4,5]);
});

Deno.test("[4, 7, 9, 2, 5, 1], 35 => [1,4]", () => {
    const actual = pairProduct([4, 7, 9, 2, 5, 1], 35);
    assertEquals(actual, [1,4]);
});

Deno.test("[3, 2, 5, 4, 1], 10 => [1,2]", () => {
    const actual = pairProduct([3, 2, 5, 4, 1], 10);
    assertEquals(actual, [1,2]);
});

Deno.test("[4, 6, 8, 2], 16 => [2,3]", () => {
    const actual = pairProduct([4, 6, 8, 2], 16);
    assertEquals(actual, [2,3]);
});

const nums: number[] = [];
for (let i = 0; i <= 30000; i += 1) {
  nums.push(i);
}
Deno.test("arrray up to 30000, 899970000 => [ 29999, 30000 ] ", () => {
    const actual = pairProduct(nums,899970000);
    assertEquals(actual, [ 29999, 30000 ]);
});