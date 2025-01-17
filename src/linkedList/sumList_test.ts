import { assertStrictEquals } from "@std/assert/strict-equals";

import { Node } from "./Node.ts";
import { sumList, sumListRecursive } from "./sumList.ts";

Deno.test("2 -> 8 -> 3 -> -1 -> 7 returns 19", () => {
    const a = new Node(2);
    const b = new Node(8);
    const c = new Node(3);
    const d = new Node(-1);
    const e = new Node(7);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    const actual = sumList(a);
    assertStrictEquals(actual, 19);
});

Deno.test("38 -> 4 returns 42", () => {
    const x = new Node(38);
    const y = new Node(4);

    x.next = y;

    const actual = sumList(x);
    assertStrictEquals(actual, 42);
});

Deno.test("100 returns 100", () => {
    const z = new Node(100);

    const actual = sumList(z);
    assertStrictEquals(actual, 100);
});

Deno.test("null returns 0", () => {
    const actual = sumList(null);
    assertStrictEquals(actual, 0);
});

Deno.test("2 -> 8 -> 3 -> -1 -> 7 recursive returns 19", () => {
    const a = new Node(2);
    const b = new Node(8);
    const c = new Node(3);
    const d = new Node(-1);
    const e = new Node(7);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    const actual = sumListRecursive(a);
    assertStrictEquals(actual, 19);
});


Deno.test("38 -> 4 recursive returns 42", () => {
    const x = new Node(38);
    const y = new Node(4);

    x.next = y;

    const actual = sumListRecursive(x);
    assertStrictEquals(actual, 42);
});

Deno.test("100 recursive returns 100", () => {
    const z = new Node(100);

    const actual = sumListRecursive(z);
    assertStrictEquals(actual, 100);
});

Deno.test("null recursive returns 0", () => {
    const actual = sumListRecursive(null);
    assertStrictEquals(actual, 0);
});