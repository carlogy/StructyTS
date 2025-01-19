import { Node } from "./Node.ts";

const getNodeValueIterative = (head : Node<string | number> | null, index : number) : string | number |null => {

    let current = head;
    let count = 0;

    while (current !== null) {
        if (count === index) {
            return current.val;
        }
        current = current.next;
        count ++;
    }
    return null;
};


const getNodeValueRecursive = (head : Node<string | number> | null, index : number) : string | number| null => {


    if (head === null) {
        return null;
    }

    if (index === 0) return head.val;

    return getNodeValueRecursive(head.next, index-1);

};


export {getNodeValueIterative, getNodeValueRecursive};