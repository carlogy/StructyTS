import { assertStrictEquals } from "@std/assert/strict-equals";
import { fibonacci } from "./fibonacci.ts";

Deno.test("0 returns 0", () => {
    const actual = fibonacci(0);
    assertStrictEquals(actual, 0);
});

Deno.test("1 returns 1", () => {
    const actual = fibonacci(1);
    assertStrictEquals(actual, 1);
});

Deno.test("2 returns 1", () => {
    const actual = fibonacci(2);
    assertStrictEquals(actual, 1);
});

Deno.test("3 returns 2", () => {
    const actual = fibonacci(3);
    assertStrictEquals(actual, 2);
});

Deno.test("4 returns 3", () => {
    const actual = fibonacci(4);
    assertStrictEquals(actual, 3);
});

Deno.test("5 returns 5", () => {
    const actual = fibonacci(5);
    assertStrictEquals(actual, 5);
});

Deno.test("8 returns 21", () => {
    const actual = fibonacci(8);
    assertStrictEquals(actual, 21);
});

Deno.test("10 returns 55", () => {
    const actual = fibonacci(10);
    assertStrictEquals(actual, 55);
});