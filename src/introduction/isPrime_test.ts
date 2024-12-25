import { expect } from "jsr:@std/expect";
import { isPrime } from "./isPrime.ts";

Deno.test("isPrime check", () => {
   interface Case {
    num: number;
    prime: boolean;
   }
   const cases : Case[] = [
    {
        num: 2,
        prime: true
    },
    {
        num: 3,
        prime: true
    },
    {
        num: 4,
        prime: false,
    },{
        num: 5,
        prime: true
    },{
        num: 6,
        prime: false
    },{
        num: 7,
        prime: true
    }, {
        num: 8,
        prime: false
    }, {
        num: 25,
        prime: false
    },{
        num: 31,
        prime: true
    }, {
        num: 2017,
        prime: true
    }, {
        num: 2048,
        prime: false
    }, {
        num: 1,
        prime: false
    }
   ]

   for (let i = 0; i < cases.length; i++) {
    const actual = isPrime(cases[i].num)
    expect(actual).toBe(cases[i].prime)
   }

})
