import { assertEquals } from "jsr:@std/assert/equals";
import { intersection } from "./intersection.ts";

const arrayComparison = (a: number[], b: number[]) => {

    if (a.length !== b.length) {
        return false;
    }

    interface Count {
        [key: number]: boolean
    }
    const count: Count = {};

    for (const elem of a) {
        if (!(elem in count)) {
            count[elem] = true;
        }
    }

    for (const elem of b) {
        if (!(elem in count)) {
            return false;
        }
    }
    return true;
}

Deno.test("[4,2,1,6], [3,6,9,2,10] => [2, 6]", () => {
    const actual = intersection([4,2,1,6], [3,6,9,2,10]);
    assertEquals(arrayComparison(actual, [2,6]), true);
});

Deno.test("[2,4,6], [4,2] => [2,4]", () => {
    const actual = intersection([2,4,6], [4,2]);
    assertEquals(arrayComparison(actual, [2,4]), true);
});

Deno.test("[4,2,1], [1,2,4,6] => [1,2,4]", () => {
    const actual = intersection([4,2,1], [1,2,4,6]);
    assertEquals(arrayComparison(actual, [1,2,4]), true);
});

Deno.test("[0,1,2], [10,11] => []", () => {
    const actual = intersection([0,1,2], [10,11]);
    assertEquals(arrayComparison(actual, []), true);
});

const a: number[] = [];
const b: number[] = [];
const expected: number[] = []
for (let i = 0; i < 30000; i += 1) {
  a.push(i);
  b.push(i);
  expected.push(i);
};

Deno.test("a & b upto 30000 => ^30000", () => {
    const actual = intersection(a, b);
    assertEquals(arrayComparison(actual, expected), true);
});