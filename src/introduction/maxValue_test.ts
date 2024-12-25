import {expect} from "jsr:@std/expect";

import { maxValue } from "./maxValue.ts";

Deno.test("expect max 10 from list [4, 7, 2, 8, 10, 9]", () => {
    const actual = maxValue([4, 7, 2, 8, 10, 9]);
    expect(actual).toBe(10)
})

Deno.test("Expect 40.3 from list [10, 5, 40, 40.3]", ()=> {
    const actual = maxValue([10, 5, 40, 40.3]);
    expect(actual).toBe(40.3);
})

Deno.test("Expect -1 from list [-5, -2, -1, -11]", ()=> {
    const actual = maxValue([-5, -2, -1, -11]);
    expect(actual).toBe(-1);
})

Deno.test("Expect 42 from list [42]", ()=> {
    const actual = maxValue([42]);
    expect(actual).toBe(42);
})

Deno.test("Expect 1000 from list [1000, 8]", ()=> {
    const actual = maxValue([1000, 8]);
    expect(actual).toBe(1000);
})

Deno.test("Expect 5 from list [2, 5, 1, 1, 4]", ()=> {
    const actual = maxValue([2, 5, 1, 1, 4]);
    expect(actual).toBe(5);
})