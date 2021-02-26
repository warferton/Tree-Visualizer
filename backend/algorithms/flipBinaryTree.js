export function flipBinaryTree(tree){
    (function recursion(current_node){

        if(current_node === null)
            return;

        //put into temp var    
        var temp = current_node.child_left
        //swap
        current_node.child_left = current_node.child_right;
        current_node.child_right = temp;

        recursion(current_node.child_left);
        recursion(current_node.child_right);

    })(tree.root)
}