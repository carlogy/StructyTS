class Node {
    val: string;
    next: Node | null;

    constructor(val: string) {
        this.val = val;
        this.next = null;
    }
}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;


const printLinkedList = (head : Node) => {
    let current = head;

    while (current !== null) {
        console.log("Current Node:\t", current.val);
       if (current.next === null) {
        break;
       }

       current = current.next;
    }
};

console.log("Starting iterative function:");
printLinkedList(a);

const recursivePrintLL = (head : Node | null) => {

    if (head === null) {
        return;
    }

    console.log("Current Node:\t", head.val);
    recursivePrintLL(head.next);
};

console.log("Starting Recursive function:");
recursivePrintLL(a);

export default Node;