import { assertStrictEquals } from "@std/assert/strict-equals";

import { linkedListValues, recursiveLinkedListValues } from "./linkedListValues.ts";

import { Node } from "./Node.ts";

Deno.test("x -> y returns ['x', 'y']", () => {
    const x = new Node("x");
    const y = new Node('y');
    x.next = y;

    const actual = linkedListValues(x);
    const expected = ['x', 'y'];

    for (let i = 0; i < actual.length; i++){
        assertStrictEquals(actual[i], expected[i]);
    }
});

Deno.test("a -> b -> c -> d returns ['a', 'b', 'c', 'd']", () => {
    const a = new Node("a");
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    a.next = b;
    b.next = c;
    c.next = d;

    const actual = linkedListValues(a);
    const expected = ['a', 'b', 'c', 'd'];

    for (let i = 0; i < actual.length; i++){
        assertStrictEquals(actual[i], expected[i]);
    }
});


Deno.test("q  returns ['q']", () => {
    const q = new Node("q");
    const actual = linkedListValues(q);
    const expected = ['q'];

    for (let i = 0; i < actual.length; i++){
        assertStrictEquals(actual[i], expected[i]);
    }

});

Deno.test("null returns []", () => {
    const actual = linkedListValues(null);
    const expected = [''];

    for (let i = 0; i < actual.length; i++){
        assertStrictEquals(actual[i], expected[i]);
    }
});

Deno.test("x -> y recursive returns ['x', 'y']", () => {
    const x = new Node("x");
    const y = new Node('y');
    x.next = y;

    const actual = recursiveLinkedListValues(x);
    const expected = ['x', 'y'];

    for (let i = 0; i < actual.length; i++){
        assertStrictEquals(actual[i], expected[i]);
    }

});


Deno.test("q recursive returns ['q']", () => {
    const q = new Node("q");


    const actual = recursiveLinkedListValues(q);
    const expected = ['q'];

    for (let i = 0; i < actual.length; i++){
        assertStrictEquals(actual[i], expected[i]);
    }

});

Deno.test("null recursive returns []", () => {
    const actual = recursiveLinkedListValues(null);
    const expected = [''];

    for (let i = 0; i < actual.length; i++){
        assertStrictEquals(actual[i], expected[i]);
    }

});

Deno.test("a -> b -> c -> d returns ['a', 'b', 'c', 'd']", () => {
    const a = new Node("a");
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    a.next = b;
    b.next = c;
    c.next = d;

    const actual = recursiveLinkedListValues(a);
    const expected = ['a', 'b', 'c', 'd'];

    for (let i = 0; i < actual.length; i++){
        assertStrictEquals(actual[i], expected[i]);
    }
});