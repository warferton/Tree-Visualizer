import {RegularTreeNode as Node} from "./tree_node.mjs"
import List from "collections/list.js"

function Tree(data) {
    const node = new Node(data);
    this.root = node;
 }

 /* Using DF search traversion through a regular tree.
  Inside func basically looks liek this: {recursion(this.root)}
  then executes callback func */
Tree.prototype.traverseDF = function(callback){
    (function recursion(current_node){
        for(var i = 0, length = current_node.children.length; i < length; i++){
            recursion(current_node.children[i]);
        }
        callback(current_node);
    })(this.root);
}

Tree.prototype.traverseBF = function(callback){
    let queue = new List();

    queue.push(this.root);

    let current_node = queue.shift();

    while(current_node){
        for(var i = 0, length = current_node.children.length; i < length; i++){
            queue.push(current_node.children[i]);
        }
        callback(current_node);
        current_node = queue.shift();
    }
    
}

/*
Constructs a tree with declared number of subtrees @param subtree_num,
that have a random number of leaves.
Complexity: O(n^2)
*/
Tree.prototype.construct = function(subtree_num){

    let flag = subtree_num;

    let queue = new List();
    queue.push(this.root);

    let current_node = queue.shift();
        
    while(flag > 0){
        let leaf_num = Math.floor((Math.random() * 3));

        for(var j = 0; j < leaf_num; j++){
            let leaf_load = Math.floor((Math.random() * 100) + 1);
            current_node.children.push(new Node(leaf_load));
            current_node.children[j].parent = current_node;
            queue.push(current_node.children[j]);
        }
        current_node = queue.shift();
        flag--;
    }

}


//DEMONSTRATIVE TEST CASE
// var tree = new Tree(0);

// tree.construct(3);

// tree.traverseBF(function(node){
//     console.log(node.data);
//     console.log(node.children);
// })
