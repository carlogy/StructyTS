import { assertEquals } from "jsr:@std/assert/equals";
import { fizzBuzz } from "./fizzBuzz.ts";


Deno.test('11 => [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11]', () => {
    const actual = fizzBuzz(11);
    assertEquals(actual, [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11]);
});

Deno.test('2 => [1,2]', () => {
    const actual = fizzBuzz(2);
    assertEquals(actual, [1,2]);
});

Deno.test('16 => [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz",16]', () => {
    const actual = fizzBuzz(16);
    assertEquals(actual, [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz",16]);
});

Deno.test('32 => [1,2,"fizz", 4,"buzz", "fizz",7,8,"fizz", "buzz",11,"fizz",13,14,"fizzbuzz",16,17,"fizz",19,"buzz","fizz", 22,23,"fizz","buzz", 26,"fizz",28,29,"fizzbuzz", 31,32]', () => {
    const actual = fizzBuzz(32);
    assertEquals(actual, [1,2,"fizz", 4,"buzz", "fizz",7,8,"fizz", "buzz",11,"fizz",13,14,"fizzbuzz",16,17,"fizz",19,"buzz","fizz", 22,23,"fizz","buzz", 26,"fizz",28,29,"fizzbuzz", 31,32]);
});