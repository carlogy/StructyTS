import { assertStrictEquals } from "@std/assert/strict-equals";
import { sumOfLengths } from "./sumOfLengths.ts";

Deno.test('["goat", "cat", "purple"] returns 13', () => {
    const actual = sumOfLengths(["goat", "cat", "purple"]);
    assertStrictEquals(actual, 13);
});

Deno.test('["bike", "at", "pencils", "phone"] returns 18', () => {
    const actual = sumOfLengths(["bike", "at", "pencils", "phone"]);
    assertStrictEquals(actual, 18);
});

Deno.test('[] returns 0', () => {
    const actual = sumOfLengths([]);
    assertStrictEquals(actual, 0);
});

Deno.test('["", " ", "  ", "   ", "    ", "     "] returns 15', () => {
    const actual = sumOfLengths(["", " ", "  ", "   ", "    ", "     "]);
    assertStrictEquals(actual, 15);
});

Deno.test('["0", "313", "1234567890"] returns 14', () => {
    const actual = sumOfLengths(["0", "313", "1234567890"]);
    assertStrictEquals(actual, 14);
});
