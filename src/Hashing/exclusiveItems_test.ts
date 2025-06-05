import { assertEquals } from "jsr:@std/assert/equals";
import { exclusiveItems } from "./exclusiveItems.ts";

const arrayCompare = (a: number[], b: number[]) => {
    if (a.length !== b.length) {
        return false;
    }

    interface Count {
        [key: number]: boolean;
    }

    const count: Count = {};

    for (const item of a) {
        if (!(item in count)) {
            count[item] = true;
            continue;
        }
        return false;
    }

    for (const item of b) {
        if (!(item in count)) {
            return false;
        }
    }
    return true;
}

Deno.test("[4,2,1,6], [3,6,9,2,10] => [4,1,3,9,10]", () => {
    const actual = exclusiveItems([4,2,1,6], [3,6,9,2,10]);
    assertEquals(arrayCompare(actual,[4,1,3,9,10]), true);
});

Deno.test("[2,4,6], [4,2] => [6]", () => {
    const actual = exclusiveItems([2,4,6], [4,2]);
    assertEquals(arrayCompare(actual, [6]), true);
});

Deno.test("[4,2,1], [1,2,4,6] => [6]", () => {
    const actual = exclusiveItems([4,2,1], [1,2,4,6]);
    assertEquals(arrayCompare(actual, [6]), true);
});

Deno.test("[0,1,2], [10,11] => [0,1,2,10,11]", () => {
    const actual = exclusiveItems([0,1,2], [10,11]);
    assertEquals(arrayCompare(actual,[0,1,2,10,11]), true);
});

const a: number[] = [];
const b: number[] = [];
for (let i = 0; i < 60000; i += 1) {
  a.push(i);
  b.push(i);
}

Deno.test("Same arrays up to 30k => []", () => {
    const actual = exclusiveItems(a, b);
    assertEquals(arrayCompare(actual, []), true);
});