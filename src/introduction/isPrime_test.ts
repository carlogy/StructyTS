import { isPrime } from "./isPrime.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("2 returns true", () => {
    const actual = isPrime(2);
    assertEquals(actual, true);
});

Deno.test("2 returns true", () => {
    const actual = isPrime(3);
    assertEquals(actual, true);
});

Deno.test("4 returns false", () => {
    const actual = isPrime(4);
    assertEquals(actual, false);
});

Deno.test("5 returns true", () => {
    const actual = isPrime(5);
    assertEquals(actual, true);
});

Deno.test("6 returns false", () => {
    const actual = isPrime(6);
    assertEquals(actual, false);
});

Deno.test("7 => true", () => {
    const actual = isPrime(7);
    assertEquals(actual, true);
});

Deno.test("8 => false", () => {
    const actual = isPrime(8);
    assertEquals(actual, false);
});

Deno.test("25 => false", () => {
    const actual = isPrime(25);
    assertEquals(actual, false);
});

Deno.test("31 => true", () =>{
    const actual = isPrime(31);
    assertEquals(actual, true);
});

Deno.test("2017 => true", () => {
    const actual = isPrime(2017);
    assertEquals(actual, true);
});

Deno.test("2048", () =>{
    const actual = isPrime(2048);
    assertEquals(actual, false);
});

Deno.test("1 => false", () => {
    const actual = isPrime(1);
    assertEquals(actual, false);
});

Deno.test("713 => false", () => {
    const actual = isPrime(713);
    assertEquals(actual, false);
});