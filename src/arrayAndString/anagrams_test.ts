import { expect } from "jsr:@std/expect";

import { anagrams } from "./anagrams.ts";

Deno.test("restful and fluster are true", ()=> {
    const actual = anagrams('restful', 'fluster');
    expect(actual).toBe(true);
})

Deno.test("Expect cats and tocs to be false", ()=> {
    const actual = anagrams('cats', 'tocs');
    expect(actual).toBe(false);
})

Deno.test("Expect mokeyswrite and newyorktimes to be true", ()=> {
    const actual = anagrams('monkeyswrite', 'newyorktimes');
    expect(actual).toBe(true);
})

Deno.test("Expect paper and reapa to be false", () => {
    const actual = anagrams('paper', 'reapa');
    expect(actual).toBe(false);
})

Deno.test("Expect elbow and below to be true", ()=> {
    const actual = anagrams('elbow', 'below');
    expect(actual).toBe(true);
})

Deno.test("Expect tax and taxi to be false", () => {
    const actual = anagrams('tax', 'taxi');
    expect(actual).toBe(false)
})

Deno.test("Expect taxi and tax to be false", () => {
    const actual = anagrams('taxi', 'tax');
    expect(actual).toBe(false)
})

Deno.test("Expect night and thing to be true", () => {
    const actual = anagrams('night', 'thing');
    expect(actual).toBe(true)
})

Deno.test("Expect abbc and aabc to be false", () => {
    const actual = anagrams('abbc', 'aabc');
    expect(actual).toBe(false)
})

Deno.test("Expect po and popp to be false", () => {
    const actual = anagrams('po', 'popp');
    expect(actual).toBe(false)
})

Deno.test("Expect pp and oo to be false", () => {
    const actual = anagrams('pp', 'oo');
    expect(actual).toBe(false)
})