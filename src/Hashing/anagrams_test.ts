import { assertEquals } from "jsr:@std/assert/equals";

import { anagrams } from "./anagrams.ts";

Deno.test("'restful', 'fluster' => true", ()=>{
    const actual = anagrams('restful', 'fluster');
    assertEquals(actual, true);
});

Deno.test("'cats', 'tocs' => false", () => {
    const actual =  anagrams('cats', 'tocs');
    assertEquals(actual, false);
});

Deno.test("'monkeyswrite', 'newyorktimes' => true", ()=>{
    const actual = anagrams('monekyswrite', 'newyorktimes');
    assertEquals(actual, true);
});

Deno.test("'paper', 'reapa' => false", () => {
    const actual = anagrams('paper', 'reapa');
    assertEquals(actual, false);
});

Deno.test("'elbow', 'below' => true", () =>{
    const actual = anagrams('elbow', 'below');
    assertEquals(actual, true);
});

Deno.test("'tax', 'taxi' => fase", () =>{
    const actual = anagrams('tax', 'taxi');
    assertEquals(actual, false);
});

Deno.test("'taxi', 'tax' => false",() => {
    const actual = anagrams('taxi', 'tax');
    assertEquals(actual, false);
});

Deno.test("'night', 'thing' => true", () => {
    const actual = anagrams('night', 'thing');
    assertEquals(actual, true);
});

Deno.test("'abbc', 'aabc' => false", ()=> {
    const actual = anagrams('abbc', 'aabc');
    assertEquals(actual, false);
});

Deno.test("'po', 'popp' => false", ()=>{
    const actual = anagrams('po', 'popp');
    assertEquals(actual, false);
});

Deno.test("'pp', 'oo' => false", ()=>{
    const actual = anagrams('pp', 'oo');
    assertEquals(actual, false);
});