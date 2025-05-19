import { assertEquals } from "jsr:@std/assert";
import { maxValue } from "./maxValue.ts";

Deno.test("[4, 7, 2, 8, 10, 9] returns 10", () => {
  const result = maxValue([4, 7, 2, 8, 10, 9]);
  assertEquals(result, 10);
});

Deno.test("[10, 5, 40, 40.3] returns 40.3", () => {
  const result = maxValue([10, 5, 40, 40.3]);
  assertEquals(result, 40.3);
});

Deno.test("[-5, -2, -1, -11] returns -1", () => {
  const result = maxValue([-5, -2, -1, -11]);
  assertEquals(result, -1);
});

Deno.test("[42] returns 42", () => {
  const result = maxValue([42]);
  assertEquals(result, 42);
});

Deno.test("[1000, 8] returns 1000", () => {
  const result = maxValue([1000, 8]);
  assertEquals(result, 1000);
});

Deno.test("[1000, 8, 9000] returns 1000", () => {
  const result = maxValue([1000, 8, 9000]);
  assertEquals(result, 9000);
});

Deno.test("[2, 5, 1, 1, 4] returns 5", () => {
  const result = maxValue([2, 5, 1, 1, 4]);
  assertEquals(result, 5);
});