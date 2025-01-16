import { Node } from "./Node.ts";

export const linkedListValues = (head : Node<string> | null) : string[] => {

    let current  = head;
    const values : string[] = [];

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values;

};


export const recursiveLinkedListValues = (head: Node<string> | null) : string[] => {

    const values : string[] = [];

    if (head === null) {
        return values;
    }

    values.push(head.val);

    return recursiveLinkedListValues(head.next);
};



