import { assertStrictEquals } from "@std/assert/strict-equals";
import { palindrome } from "./palindromeRecursive.ts";

Deno.test("pop returns true", () => {
    const actual = palindrome("pop");
    assertStrictEquals(actual, true);
});


Deno.test("kayak returns true", () => {
    const actual = palindrome("kayak");
    assertStrictEquals(actual, true);
});

Deno.test("boot returns false", () => {
    const actual = palindrome("boot");
    assertStrictEquals(actual, false);
});

Deno.test("rotator returns true", () => {
    const actual = palindrome("rotator");
    assertStrictEquals(actual, true);
});

Deno.test("abcbca returns false", () => {
    const actual = palindrome("abcbca");
    assertStrictEquals(actual, false);
});

Deno.test(" '' returns true", () => {
    const actual = palindrome("");
    assertStrictEquals(actual, true);
});

Deno.test("roar returns false", () => {
    const actual = palindrome("roar");
    assertStrictEquals(actual, false);
});

