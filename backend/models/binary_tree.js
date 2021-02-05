import {BinaryTreeNode as Node} from "./tree_node.mjs"
import List from "collections/list.js"

/*
    Class represents a binary tree data structure
    with BF and DF traverse methods, and a cunstructor
    Utilizes BinaryTreeNode class for its nodes.
*/
export default function BinaryTree(data){
    let node = new Node(data);
    this.root = node;
}


/*
    DF traverse for binary tree structure 
    with a callback func.
    visit order could be changed by moving visit.push and callback().
    Complexity: O(num_of_nodes)
*/
BinaryTree.prototype.traverseDF = function(callback){
    let stop_flag = false
    //preorder traversal
    return (function recursion(current_node){
        if(current_node === null)
            return;

        if(callback(current_node)) return;
        recursion(current_node.child_left);
        recursion(current_node.child_right);
    })(this.root);
}


/*
    BF traverse function for binary tree structure
    with a callback func.
    Comlexity: O(num_of_nodes)
*/
BinaryTree.prototype.traverseBF = function(callback){
    let stop_flag = false;

    let queue = new List();
    queue.push(this.root);
    let current_node = queue.shift();

    while(current_node){
        if(current_node.child_left) 
            queue.push(current_node.child_left);
        if(current_node.child_right)
            queue.push(current_node.child_right); 

        if(callback(current_node)) return;

        current_node = queue.shift();
    }

}


/*
    Constructs a binary tree with declared number of leaves
    Complexity: O(num_of_leaves * 2)
    as it contains 2 for loops of same length
*/
BinaryTree.prototype.construct = function(num_of_nodes){
    let node_count = num_of_nodes;
    const node_list = [];

    //fill the node data list
    for(let i=0; i < node_count; i++){
        var rand_num = Math.floor(Math.random()*100 + 1);
        node_list.push(rand_num);
    }

    node_list[0] = node_list[0] + 10;

    for(var i = 0; i < node_list.length; i++){
        binary_tree_1.addNode(node_list[i]);
    }

}


/*
    Inserts a new node into the tree
    Complexity: 
        worst = O(tree_depth) 
        best = O(1) (if tree only root and zero or one child node)
*/
BinaryTree.prototype.addNode = function(data){
    if(data === null)
        return

    const new_node =  new Node(data);

    (function recursion(current_node){
        if(new_node.data > current_node.data){
            if(current_node.child_right === null){
                new_node.parent = current_node;
                current_node.child_right = new_node;
                return true;
            }
            recursion(current_node.child_right);
        }
        if(new_node.data < current_node.data){
            if(current_node.child_left === null){
                new_node.parent = current_node;
                current_node.child_left = new_node;
                return true;
            }
            recursion(current_node.child_left);
        }
    })(this.root);

    return false;
}

/*
    TODO Comments
*/
BinaryTree.prototype.updateNodeData = function(node_data, new_data){
    this.traverseDF((current_node) =>{
        if(current_node.data === node_data){
            current_node.data = new_data;
            return true;
        }
        return false;
    })
}

/*
    TODO Comments
*/
BinaryTree.prototype.deleteNode = function(node_to_delete_data){
  
            return false;
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
var binary_tree_1 = new BinaryTree(6)

const node_list = [4, 9, 2, 5, 7, 10, 12, 1];

for(var i = 0; i < node_list.length; i++){
    binary_tree_1.addNode(node_list[i]);
}


var binary_tree_2 = new BinaryTree(6)

binary_tree_2.root.child_right = new Node(9)
binary_tree_2.root.child_right.parent = binary_tree_2.root
binary_tree_2.root.child_left = new Node(4)
binary_tree_2.root.child_left.parent = binary_tree_2.root
binary_tree_2.root.child_left.child_left = new Node(2)
binary_tree_2.root.child_left.child_left.parent = binary_tree_2.root.child_left
binary_tree_2.root.child_left.child_right = new Node(5)
binary_tree_2.root.child_left.child_right.parent = binary_tree_2.root.child_left
binary_tree_2.root.child_right.child_left = new Node(7)
binary_tree_2.root.child_right.child_left.parent = binary_tree_2.root.child_right
binary_tree_2.root.child_right.child_right = new Node(10)
binary_tree_2.root.child_right.child_right.parent = binary_tree_2.root.child_right
binary_tree_2.root.child_left.child_left.child_left = new Node(1)
binary_tree_2.root.child_left.child_left.child_left.parent = binary_tree_2.root.child_left.child_left

binary_tree_2.addNode(12)




console.log((binary_tree_1.compare(binary_tree_2)));

// */

var search_node = binary_tree_2.root.child_right.child_right.data

binary_tree_1.updateNodeData(search_node, 11)

console.log((search_node));


binary_tree_1.traverseBF(node => { 
    console.log(node.data);
    console.log("children: " + (node.child_left !== null && node.child_left.data)  + " | " + (node.child_right !== null && node.child_right.data));
    console.log("\n=====================================\n");
})


//TODO code: deletion, and sort funcs