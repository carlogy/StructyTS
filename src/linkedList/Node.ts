export class Node<NodeType> {
    val: NodeType;
    next: Node<NodeType> | null;

    constructor(val: NodeType) {
        this.val = val;
        this.next = null;
    }
}




