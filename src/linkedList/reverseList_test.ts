import { assertStrictEquals } from "@std/assert/strict-equals";

import { Node } from "./Node.ts";

import { reverseListIterative, reverseListRecursive } from "./reverseList.ts";
import { assertNotStrictEquals } from "@std/assert/not-strict-equals";



Deno.test("Iterative: List: a -> b -> c -> d -> e -> f returns f -> e -> d -> c -> b -> a", () => {

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    const actual = reverseListIterative(a);
    assertNotStrictEquals(actual, a);
});


Deno.test("Iterative: List: x -> y returns y -> x", () => {
    const x = new Node("x");
    const y = new Node("y");

    x.next = y;

    const actual = reverseListIterative(x);
    assertNotStrictEquals(actual, x);
});


Deno.test("Iterative: List: p returns p", () => {
    const p = new Node("p");


    const actual = reverseListIterative(p);
    assertStrictEquals(actual, p);
});

Deno.test("Recursive: List: a -> b -> c -> d -> e -> f returns f -> e -> d -> c -> b -> a", () => {

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    const actual = reverseListRecursive(a);
    assertNotStrictEquals(actual, a);
});


Deno.test("Recursive: List: x -> y returns y -> x", () => {
    const x = new Node("x");
    const y = new Node("y");

    x.next = y;

    const actual = reverseListRecursive(x);
    assertNotStrictEquals(actual, x);
});


Deno.test("Recursive: List: p returns p", () => {
    const p = new Node("p");


    const actual = reverseListRecursive(p);
    assertStrictEquals(actual, p);
});
