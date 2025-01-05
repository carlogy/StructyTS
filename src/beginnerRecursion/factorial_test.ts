import { assertStrictEquals } from "@std/assert/strict-equals";

import { factorial } from "./factorial.ts";

Deno.test("3 returns 6", () => {
    const actual = factorial(3);
    assertStrictEquals(actual, 6);
});

Deno.test("6 returns 720", () => {
    const actual = factorial(6);
    assertStrictEquals(actual, 720);
});

Deno.test("18 returns 6402373705728000", () => {
    const actual = factorial(18);
    assertStrictEquals(actual, 6402373705728000);
});

Deno.test("1 returns 1", () => {
    const actual = factorial(1);
    assertStrictEquals(actual, 1);
});

Deno.test("13 returns 6227020800", () => {
    const actual = factorial(13);
    assertStrictEquals(actual, 6227020800);
});

Deno.test("0 returns 1", () => {
    const actual = factorial(0);
    assertStrictEquals(actual, 1);
});

