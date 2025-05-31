import { assertEquals } from "jsr:@std/assert/equals";
import { mostFrequentChar } from "./mostFrequentChar.ts";

Deno.test("'bookeeper' => 'e'", () => {
    const actual = mostFrequentChar('bookeeper');
    assertEquals(actual, 'e');
});

Deno.test("'david' => 'd'", () => {
    const actual = mostFrequentChar('david');
    assertEquals(actual, 'd');
});

Deno.test("'abby' => 'b'", () => {
    const actual = mostFrequentChar('abby');
    assertEquals(actual, 'b');
});

Deno.test("'mississippi' => 'i'", () => {
    const actual = mostFrequentChar('mississippi');
    assertEquals(actual, 'i');
});

Deno.test("'potato' => 'o'", () => {
    const actual = mostFrequentChar('potato');
    assertEquals(actual, 'o');
});

Deno.test("'eleventennine' => 'e'", () => {
    const actual = mostFrequentChar('eleventennine');
    assertEquals(actual, 'e');
});

Deno.test("'riverbed' => 'r'", () => {
    const actual = mostFrequentChar('riverbed');
    assertEquals(actual, 'r');
});