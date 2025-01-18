import { Node } from "./Node.ts";

const linkedListFind = (head : Node<string | number > | null, target : string | number) : boolean => {

    let current = head;

    while(current !== null) {
        if (current.val === target) {
            return true;
        }
        current = current.next;
    }

    return false;

};


const recursiveLinkedListFind = (head : Node<string | number> | null, target : string | number) : boolean => {

    if (head === null) {
        return false;
    }

    if(head.val === target) {
        return true;
    }
    return recursiveLinkedListFind(head.next, target);
};


export {linkedListFind, recursiveLinkedListFind};