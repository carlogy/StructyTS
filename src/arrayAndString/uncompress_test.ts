import { expect } from "jsr:@std/expect";

import { uncompress } from "./uncompress.ts";

Deno.test("Expect 2c3a1t to return ccaaat", () => {
    const actual = uncompress("2c3a1t");
    expect(actual).toBe('ccaaat');
});

Deno.test("Expect 4s2b to return ssssbb", () => {
    const actual = uncompress("4s2b");
    expect(actual).toBe('ssssbb');
});

Deno.test("Expect 2p1o5p to return ppoppppp", () => {
    const actual = uncompress("2p1o5p");
    expect(actual).toBe('ppoppppp');
});

Deno.test("Expect 3n12e2z to return nnneeeeeeeeeeeezz", () => {
    const actual = uncompress("3n12e2z");
    expect(actual).toBe('nnneeeeeeeeeeeezz');
});

Deno.test("Expect 127y to return 127*y", () => {
    const actual = uncompress("127y");
    expect(actual).toBe('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
});
