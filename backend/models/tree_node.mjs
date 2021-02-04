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

var test_node_1 = new UnorderedTreeNode(5);
var test_node_2 = new UnorderedTreeNode(5);

// UnorderedTreeNode.prototype.compareNodes = function(compare_node){
//         return  this.parent === compare_node.parent &&
//                 this.data === compare_node.data &&
//                 this.children === compare_node.children
// }

// console.log(test_node_2.compareNodes(test_node_1));