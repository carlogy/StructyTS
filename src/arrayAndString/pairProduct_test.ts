import { expect } from "jsr:@std/expect";

import { pairProduct } from "./pairProduct.ts";


Deno.test("Expect [3, 2, 5, 4, 1], 8] to return [1, 3]", () => {
    const actual = pairProduct([3, 2, 5, 4, 1], 8);
    const expected: number[] = [1, 3];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("Expect [3, 2, 5, 4, 1], 10 to return [1, 2]", () => {
    const actual = pairProduct([3, 2, 5, 4, 1], 10);
    const expected: number[] = [1, 2];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("Expect [4, 7, 9, 2, 5, 1], 5 to return [4, 5]", () => {
    const actual = pairProduct([4, 7, 9, 2, 5, 1], 5);
    const expected: number[] = [4, 5];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("Expect [4, 7, 9, 2, 5, 1], 35) to return [1, 4]", () => {
    const actual = pairProduct([4, 7, 9, 2, 5, 1], 35);
    const expected: number[] = [1, 4];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("Expect [3, 2, 5, 4, 1], 10 to return [1, 2]", () => {
    const actual = pairProduct([3, 2, 5, 4, 1], 10);
    const expected: number[] = [1, 2];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("Expect [4, 6, 8, 2], 16 to return [2, 3]", () => {
    const actual = pairProduct([4, 6, 8, 2], 16);
    const expected: number[] = [2, 3];
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});

Deno.test("Expect [...30000], 899970000  to return [ 29999, 30000 ] ", () => {
    const numbers : number[] = []
    for (let i = 0; i <= 30000; i ++) {
        numbers.push(i);
    }

    const actual = pairProduct(numbers, 899970000);
    const expected: number[] = [ 29999, 30000 ] ;
    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});