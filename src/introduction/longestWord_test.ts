import { assertEquals } from "jsr:@std/assert/equals";
import { longestWord } from "./longestWord.ts";


Deno.test('"what a wonderful world" => "wonderful"', ()=> {
    const actual = longestWord("what a wonderful world");
    assertEquals(actual, "wonderful");
});

Deno.test('"have a nice day" => "nice"', ()=>{
    const actual = longestWord("have a nice day");
    assertEquals(actual, "nice");
});

Deno.test('"the quick brown fox jumped over the lazy dog" => "jumped"', () =>{
    const actual = longestWord("the quick brown fox jumped over the lazy dog");
    assertEquals(actual, "jumped");
});

Deno.test('"who did eat the ham" => "ham"', ()=>{
    const actual = longestWord("who did eat the ham");
    assertEquals(actual,"ham");
});

Deno.test('"potato" => "potato"', ()=>{
    const actual = longestWord("potato");
    assertEquals(actual, "potato");
});