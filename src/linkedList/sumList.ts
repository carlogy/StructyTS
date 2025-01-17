import { Node } from "./Node.ts";


export const sumList = (head : Node<number> | null) : number => {


let current = head;
let total = 0;

while (current !== null) {
    total += current.val;
    current = current.next;
}

return total;

};



export const sumListRecursive = (head: Node<number> | null) : number => {

    const total = sumNodes(head, 0);

    return total;

};

const sumNodes = (head: Node<number> | null, total: number) : number => {

    if (head === null) {
        return total;
    }

    total += head.val;
    return sumNodes(head.next, total);
};





