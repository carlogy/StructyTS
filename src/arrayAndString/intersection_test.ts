import { expect } from "jsr:@std/expect";
import { intersection } from "./intersection.ts";

Deno.test("[4,2,1,6], [3,6,9,2,10] return [2,6]", () => {
    const actual = intersection([4,2,1,6], [3,6,9,2,10]);
    const expected : number[] = [2,6];
    for (let i = 0; i< actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("[2,4,6], [4,2] return [2,4]", () => {
    const actual = intersection([2,4,6], [4,2]);
    const expected : number[] = [2,4];
    for (let i =0; i< actual.length;i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("[4,2,1], [1,2,4,6] return [1,2,4]", () => {
    const actual = intersection([4,2,1], [1,2,4,6]);
    const expected : number[] = [1,2,4];
    for (let i =0; i< actual.length;i++) {
        expect(actual).toContain(expected[i]);
    }
});

Deno.test("[0,1,2], [10,11] return []", () => {
    const actual = intersection([0,1,2], [10,11]);
    const expected : number[] = [];
    for (let i =0; i< actual.length;i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("[...50000], [...50000] return [...5000]", () => {

    const a: number[]= [];
    const b: number[] = [];
    const expected: number[] = [];

    for (let i = 0; i < 50000; i += 1) {
        a.push(i);
        b.push(i);
        expected.push(i);
    };

    const actual = intersection(a, b);

    for (let i =0; i< actual.length;i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});