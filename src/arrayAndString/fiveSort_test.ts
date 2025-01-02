import { assertStrictEquals } from "@std/assert/strict-equals";

import { fiveSort } from "./fiveSort.ts";

Deno.test("[12, 5, 1, 5, 12, 7] returns [12, 7, 1, 12, 5, 5]", () => {
    const actual = fiveSort([12, 5, 1, 5, 12, 7]);
    const expected: number[] = [12, 7, 1, 12, 5, 5];

    for (let i = 0; i < actual.length; i++) {
        assertStrictEquals(actual[i], expected[i]);
    }
});

Deno.test("[5, 2, 5, 6, 5, 1, 10, 2, 5, 5] returns [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]", () => {
    const actual = fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
    const expected: number[] = [2, 2, 10, 6, 1, 5, 5, 5, 5, 5];

    for (let i = 0; i < actual.length; i++) {
        assertStrictEquals(actual[i], expected[i]);
    }
});

Deno.test("[5, 5, 5, 1, 1, 1, 4] returns [4, 1, 1, 1, 5, 5, 5]", () => {
    const actual = fiveSort([5, 5, 5, 1, 1, 1, 4]);
    const expected: number[] = [4, 1, 1, 1, 5, 5, 5];

    for (let i = 0; i < actual.length; i++) {
        assertStrictEquals(actual[i], expected[i]);
    }
});

Deno.test("[5, 5, 6, 5, 5, 5, 5] returns [6, 5, 5, 5, 5, 5, 5]", () => {
    const actual = fiveSort([5, 5, 6, 5, 5, 5, 5]);
    const expected: number[] = [6, 5, 5, 5, 5, 5, 5];

    for (let i = 0; i < actual.length; i++) {
        assertStrictEquals(actual[i], expected[i]);
    }
});

Deno.test("[5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5] returns [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]", () => {
    const actual = fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
    const expected: number[] = [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5];

    for (let i = 0; i < actual.length; i++) {
        assertStrictEquals(actual[i], expected[i]);
    }
});

Deno.test("20k 5s then 20k 4s returns 20k 4s then 20k 5s", () => {
    const fives: number[] = new Array(20000).fill(5);
    const fours: number[] = new Array(20000).fill(4);
    const nums = [...fives, ...fours];

    const actual = fiveSort(nums);
    const expected: number[] = [...fours, ...fives];

    for (let i = 0; i < actual.length; i++) {
        assertStrictEquals(actual[i], expected[i]);
    }
});