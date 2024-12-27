import { expect } from "jsr:@std/expect";

import { mostFrequentChar } from "./mostFrequentChar.ts";

Deno.test("Bookkeeper should return e", ()=> {
    const actual  = mostFrequentChar('Bookkeeper')
    expect(actual).toBe('e')
})

Deno.test("david shoult return d", ()=> {
    const actual = mostFrequentChar('david')
    expect(actual).toBe('d')
})

Deno.test("abby should return b", ()=> {
    const actual = mostFrequentChar('abby')
    expect(actual).toBe('b')
})

Deno.test('mississippi should return i', ()=> {
    const actual  = mostFrequentChar('mississippi')
    expect(actual).toBe('i')
})

Deno.test('potato should return o', ()=> {
    const actual = mostFrequentChar('potato')
    expect(actual).toBe('o')
})

Deno.test('eleventennine should return e', ()=> {
    const actual = mostFrequentChar('eleventennine')
    expect(actual).toBe('e')
})

Deno.test("riverbed shoult return r", ()=> {
    const actual = mostFrequentChar("riverbed")
    expect(actual).toBe('r')
})