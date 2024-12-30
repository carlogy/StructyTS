import { expect } from "jsr:@std/expect";
import { compress } from "./compress.ts";

Deno.test("ccaaatsss returns 2c3at3s ", () => {
    const actual = compress('ccaaatsss');
    expect(actual).toBe('2c3at3s');
});

Deno.test("ssssbbz returns 4s2bz", () => {
    const actual = compress('ssssbbz');
    expect(actual).toBe('4s2bz');
});

Deno.test("ppoppppp returns 2po5p", () => {
    const actual = compress('ppoppppp');
    expect(actual).toBe('2po5p')
});

Deno.test("nnneeeeeeeeeeeezz returns 3n12e2z", () => {
    const actual = compress('nnneeeeeeeeeeeezz');
    expect(actual).toBe('3n12e2z');
});

Deno.test("127*y returns 127y", () => {
    const actual = compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
    expect(actual).toBe('127y');
});

Deno.test("abcd returns abcd", () => {
    const actual = compress('abcd');
    expect(actual).toBe('abcd');
});