import {BinaryTreeNode as Node} from "./tree_node.mjs"
import List from "collections/list.js"

/*
    Class represents an ordered binary tree data structure
    with BF and DF traverse methods, and a cunstructor
    Utilizes BinaryTreeNode class for its nodes.
*/
export default function BinaryTree(data){
    let node = new Node(data)
    this.root = node
}


/*
    DF traverse for binary tree structure 
    with a callback func.
    visit order could be changed by moving visit.push and callback().
    Complexity: O(num_of_nodes)
*/
BinaryTree.prototype.traverseDF = function(callback){
    //preorder traversal
    return (function recursion(current_node){
        if(current_node === null)
            return
        callback(current_node)
        recursion(current_node.child_left)
        recursion(current_node.child_right)
    })(this.root)
}


/*
    BF traverse function for binary tree structure
    with a callback func.
    Comlexity: O(num_of_nodes)
*/
BinaryTree.prototype.traverseBF = function(callback){
    let queue = new List()
    queue.push(this.root)
    let current_node = queue.shift()
    while(current_node){
        if(current_node.child_left) 
            queue.push(current_node.child_left)
        if(current_node.child_right)
            queue.push(current_node.child_right)
        callback(current_node)
        current_node = queue.shift()
    }

}


/*
    Constructs a binary tree with declared number of leaves
    Complexity: O(num_of_leaves * 2)
    as it contains 2 for loops of same length
*/
BinaryTree.prototype.construct = function(num_of_leaves){
    let leaf_count = num_of_leaves
    const leaf_list = [];

    //fill the leaf data list
    for(let i=0; i < leaf_count; i++){
        var rand_num = Math.floor(Math.random()*100 + 1)
        leaf_list.push(rand_num)
    }

    leaf_list[0] = leaf_list[0] + 10

    for(var i = 0; i < leaf_list.length; i++){
        binary_tree_1.addNode(leaf_list[i]);
    }

}

/*
    Inserts a new leaf into the tree
    Complexity: 
        worst = O(num_of_nodes) 
        best = O(1) (if tree only root and zero or one child node)
*/
BinaryTree.prototype.addNode = function(data){
    if(data === null)
        return

    const new_node =  new Node(data);

    (function recursion(current_node){
        if(new_node.data > current_node.data){
             if(current_node.child_right === null){
                new_node.parent = current_node
                current_node.child_right = new_node;
                return;
            }
            recursion(current_node.child_right);
        }
        if(new_node.data < current_node.data){
            if(current_node.child_left === null){
                new_node.parent = current_node
                current_node.child_left = new_node;
                return;
            }
            recursion(current_node.child_left);
        }
    })(this.root);
}


//Complexity O(2n) 
//as each node in both trees visited only once
BinaryTree.prototype.compare = function(compare_tree){
    var node_list_1 = [];
    var node_list_2 = [];
    this.traverseBF((node)=> {
        node_list_1.push(node.data);
    })
    compare_tree.traverseBF((node)=>{
        node_list_2.push(node.data);
    })
    return List.toString(node_list_1) === List.toString(node_list_2);
}


/* //TEST CASE 
//Supposed Tree View
/*
                     6
                  /     \
                 4       9
               /   \    /  \
              2     5  7    10
             /                \
            1                  12
*/
// /*
// var binary_tree_1 = new BinaryTree(6)

// const leaf_list = [4, 9, 2, 5, 7, 10, 12, 1];

// for(var i = 0; i < leaf_list.length; i++){
//     binary_tree_1.addNode(leaf_list[i]);
// }

// var binary_tree_2 = new BinaryTree(6)

// binary_tree_2.root.child_right = new Node(9)
// binary_tree_2.root.child_left = new Node(4)
// binary_tree_2.root.child_left.child_left = new Node(2)
// binary_tree_2.root.child_left.child_right = new Node(5)
// binary_tree_2.root.child_right.child_left = new Node(7)
// binary_tree_2.root.child_right.child_right = new Node(10)
// binary_tree_2.root.child_left.child_left.child_left = new Node(1)

// binary_tree_2.addNode(12)



// console.log((binary_tree_1.compare(binary_tree_2)));

// */

// binary_tree_1.traverseBF(node => { 
//     console.log(node.data);
//     console.log("children: " + (node.child_left !== null && node.child_left.data)  + " | " + (node.child_right !== null && node.child_right.data));
//     console.log("\n=====================================\n");
// })


//TODO code deletion, update_leaf, and compare funcs