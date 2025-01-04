import { assertStrictEquals } from "@std/assert/strict-equals";
import { sumNumbersRecursive } from "./sumNumbersRecursive.ts";


Deno.test("[5, 2, 9, 10] returns 26", () => {
    const actual = sumNumbersRecursive([5, 2, 9, 10]);
    assertStrictEquals(actual, 26);
});

Deno.test("[1, -1, 1, -1, 1, -1, 1] returns -1", () => {
    const actual = sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]);
    assertStrictEquals(actual, -1);
});

Deno.test("[] returns 0", () => {
    const actual = sumNumbersRecursive([]);
    assertStrictEquals(actual, 0);
});

Deno.test("[1000, 0, 0, 0, 0, 0, 1] returns 1001", () => {
    const actual = sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1]);
    assertStrictEquals(actual, 1001);
});

Deno.test("[700, 70, 7] returns 777", () => {
    const actual = sumNumbersRecursive([700, 70, 7]);
    assertStrictEquals(actual, 777);
});

Deno.test("[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1] returns -55", () => {
    const actual = sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]);
    assertStrictEquals(actual, -55);
});

Deno.test("[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] returns 0", () => {
    const actual = sumNumbersRecursive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    assertStrictEquals(actual, 0);
});