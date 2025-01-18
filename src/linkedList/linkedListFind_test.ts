import { assertStrictEquals } from "@std/assert/strict-equals";
import { Node } from "./Node.ts";

import { linkedListFind, recursiveLinkedListFind } from "./linkedListFind.ts";


Deno.test("List: a -> b -> c -> d, Target: 'c' returns true", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;


    const actual = linkedListFind(a, "c");
    assertStrictEquals(actual, true);
});

Deno.test("List: a -> b -> c -> d, Target: 'd' returns true", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = linkedListFind(a, "d");
    assertStrictEquals(actual, true);
});

Deno.test("List: a -> b -> c -> d, Target: 'c' returns true", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;


    const actual = linkedListFind(a, "c");
    assertStrictEquals(actual, true);
});

Deno.test("List: a -> b -> c -> d, Target: 'q' returns returns false", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = linkedListFind(a, "q");
    assertStrictEquals(actual, false);
});


Deno.test("List: a -> b -> c -> d, Target: 'c' returns true", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;


    const actual = linkedListFind(a, "c");
    assertStrictEquals(actual, true);
});

Deno.test("List: jason -> leneli, Target: 'jason' returns true", () => {
    const node1 = new Node("jason");
    const node2 = new Node("leneli");

    node1.next = node2;

    const actual = linkedListFind(node1, "jason");
    assertStrictEquals(actual, true);
});

Deno.test("List: 42, Target: 100 returns false", () => {
    const node1 = new Node(42);


    const actual = linkedListFind(node1, 100);
    assertStrictEquals(actual, false);
});


Deno.test("Recursive Function: List: a -> b -> c -> d, Target: 'c' returns true", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;


    const actual = recursiveLinkedListFind(a, "c");
    assertStrictEquals(actual, true);
});

Deno.test("Recursive Function: List: a -> b -> c -> d, Target: 'd' returns true", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = recursiveLinkedListFind(a, "d");
    assertStrictEquals(actual, true);
});

Deno.test("Recursive function: List: a -> b -> c -> d, Target: 'c' returns true", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;


    const actual = recursiveLinkedListFind(a, "c");
    assertStrictEquals(actual, true);
});

Deno.test("Recursive Function: List: a -> b -> c -> d, Target: 'q' returns returns false", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = recursiveLinkedListFind(a, "q");
    assertStrictEquals(actual, false);
});


Deno.test("Recursive Function: List: a -> b -> c -> d, Target: 'c' returns true", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = recursiveLinkedListFind(a, "c");
    assertStrictEquals(actual, true);
});

Deno.test("Recursive Function: List: jason -> leneli, Target: 'jason' returns true", () => {
    const node1 = new Node("jason");
    const node2 = new Node("leneli");

    node1.next = node2;

    const actual = recursiveLinkedListFind(node1, "jason");
    assertStrictEquals(actual, true);
});

Deno.test("Recursive function: List: 42, Target: 100 returns false", () => {
    const node1 = new Node(42);


    const actual = recursiveLinkedListFind(node1, 100);
    assertStrictEquals(actual, false);
});

