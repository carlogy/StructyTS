import { assertEquals } from "jsr:@std/assert/equals";
import { pairs } from "./pairs.ts";

Deno.test('["a", "b", "c"] => [["a", "b"],["a", "c"],["b", "c"]]', () => {
    const actual = pairs(["a", "b", "c"]);
    assertEquals(actual,[["a", "b"],["a", "c"],["b", "c"]]);
});

Deno.test('["cherry", "cranberry", "banana", "blueberry", "lime", "papaya"] => [[ "cherry", "cranberry" ], [ "cherry", "banana" ],[ "cherry", "blueberry" ],[ "cherry", "lime" ],[ "cherry", "papaya" ],[ "cranberry", "banana" ],[ "cranberry", "blueberry" ],[ "cranberry", "lime" ],[ "cranberry", "papaya" ],[ "banana", "blueberry" ],[ "banana", "lime" ],[ "banana", "papaya" ],[ "blueberry", "lime" ],[ "blueberry", "papaya" ],[ "lime", "papaya" ]]', () =>{
    const actual = pairs(["cherry", "cranberry", "banana", "blueberry", "lime", "papaya"]);
    assertEquals(actual, [[ "cherry", "cranberry" ], [ "cherry", "banana" ],[ "cherry", "blueberry" ],[ "cherry", "lime" ],[ "cherry", "papaya" ],[ "cranberry", "banana" ],[ "cranberry", "blueberry" ],[ "cranberry", "lime" ],[ "cranberry", "papaya" ],[ "banana", "blueberry" ],[ "banana", "lime" ],[ "banana", "papaya" ],[ "blueberry", "lime" ],[ "blueberry", "papaya" ],[ "lime", "papaya" ]]);
});

Deno.test('["a", "b", "c", "d"] => [["a", "b"],["a", "c"],["a", "d"],["b", "c"],["b", "d"],["c", "d"]]', () => {
    const actual = pairs(["a", "b", "c", "d"]);
    assertEquals(actual, [["a", "b"],["a", "c"],["a", "d"],["b", "c"],["b", "d"],["c", "d"]]);
});