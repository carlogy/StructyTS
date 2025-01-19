import { assertStrictEquals } from "@std/assert/strict-equals";

import { Node } from "./Node.ts";

import { getNodeValueIterative, getNodeValueRecursive } from "./getNodeValue.ts";


Deno.test("Iterative: Linked List:  a -> b -> c -> d Index: 2 Returns:   'c'", () => {

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = getNodeValueIterative(a, 2);
    assertStrictEquals(actual, 'c');

});

Deno.test("Iterative: Linked List:  a -> b -> c -> d Index: 3 Returns:   'd'", () => {

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = getNodeValueIterative(a, 3);
    assertStrictEquals(actual, 'd');

});

Deno.test("Iterative: Linked List:  a -> b -> c -> d Index: 7 Returns:   null", () => {

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = getNodeValueIterative(a, 7);
    assertStrictEquals(actual, null);

});

Deno.test("Iterative: Linked List:  banana -> mango Index: 0 Returns:   'banana'", () => {

    const node1 = new Node("banana");
    const node2 = new Node("mango");

    node1.next = node2;

    const actual = getNodeValueIterative(node1, 0);
    assertStrictEquals(actual, 'banana');

});

Deno.test("Iterative: Linked List:  banana -> mango Index: 1 Returns:   'mango'", () => {

    const node1 = new Node("banana");
    const node2 = new Node("mango");

    node1.next = node2;

    const actual = getNodeValueIterative(node1, 1);
    assertStrictEquals(actual, 'mango');

});

Deno.test("Iterative: Linked List:  1 -> 2 -> 3 Index: 1 Returns:   2", () => {

    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;

    const actual = getNodeValueIterative(node1, 1);
    assertStrictEquals(actual, 2);

});

Deno.test("Recursive: Linked List:  a -> b -> c -> d Index: 2 Returns:   'c'", () => {

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = getNodeValueRecursive(a, 2);
    assertStrictEquals(actual, 'c');

});

Deno.test("Recursive: Linked List:  a -> b -> c -> d Index: 3 Returns:   'd'", () => {

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = getNodeValueIterative(a, 3);
    assertStrictEquals(actual, 'd');

});

Deno.test("Recursive: Linked List:  a -> b -> c -> d Index: 7 Returns:   null", () => {

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const actual = getNodeValueIterative(a, 7);
    assertStrictEquals(actual, null);

});

Deno.test("Recursive: Linked List:  banana -> mango Index: 0 Returns:   'banana'", () => {

    const node1 = new Node("banana");
    const node2 = new Node("mango");

    node1.next = node2;

    const actual = getNodeValueIterative(node1, 0);
    assertStrictEquals(actual, 'banana');

});

Deno.test("Recursive: Linked List:  banana -> mango Index: 1 Returns:   'mango'", () => {

    const node1 = new Node("banana");
    const node2 = new Node("mango");

    node1.next = node2;

    const actual = getNodeValueIterative(node1, 1);
    assertStrictEquals(actual, 'mango');

});

Deno.test("Recursive: Linked List:  1 -> 2 -> 3 Index: 1 Returns:   2", () => {

    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;

    const actual = getNodeValueIterative(node1, 1);
    assertStrictEquals(actual, 2);

});

