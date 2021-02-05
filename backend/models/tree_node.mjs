export function UnorderedTreeNode(data) {
        this.parent = null
        this.data = data
        this.children = []
}

export function BinaryTreeNode(data) {
        this.parent = null
        this.data = data
        this.child_right = null
        this.child_left = null
}

// var test_node_1 = new BinaryTreeNode(2);
// var test_node_2 = new BinaryTreeNode(2);

// var test_node_3 = new BinaryTreeNode(5);
// var test_node_4 = new BinaryTreeNode(5);

// test_node_3.child_left = test_node_1;
// test_node_4.child_left = test_node_2;
