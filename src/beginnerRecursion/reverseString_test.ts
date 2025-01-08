import { assertStrictEquals } from "@std/assert/strict-equals";
import { reverseString } from "./reverseString.ts";

Deno.test("hello returns olleh", () => {
    const actual = reverseString("hello");
    assertStrictEquals(actual, "olleh");
});

Deno.test("abcdefg returns gfedcba", () => {
    const actual = reverseString("abcdefg");
    assertStrictEquals(actual, "gfedcba");
});

Deno.test("stopwatch returns hctawpots", () => {
    const actual = reverseString("stopwatch");
    assertStrictEquals(actual, "hctawpots");
});

Deno.test(" '' returns ''", () => {
    const actual = reverseString("");
    assertStrictEquals(actual, "");
});