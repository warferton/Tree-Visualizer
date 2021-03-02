import {Router} from 'express'
import {BinaryTree} from '../models/binary_tree.js'

import {flipBinaryTree as flipTree} from '../algorithms/flipBinaryTree.js'

export const router = Router()

router.route('/construct/random').get((req, res) => {
    let rand_num = Math.floor((Math.random() * 10) + 1);
    let rand_root = Math.floor((Math.random() * 10) + 1);
    const tree = new BinaryTree(rand_root);
    tree.construct(rand_num)
    console.log(rand_num);
    tree.traverseBF(node => { 
        console.log(node.data);
        console.log("children: " + (node.child_left !== null && node.child_left.data)  + " | " + (node.child_right !== null && node.child_right.data));
        console.log("\n=====================================\n");
    });
    res.json(tree)
})

router.route('/construct/:nodes').get((req, res) => {
    let node_num = req.params.nodes;
    let rand_root = Math.floor((Math.random() * 10) + 1);
    const tree = new BinaryTree(rand_root);
    tree.construct(node_num);
    console.log(node_num);
    tree.traverseBF(node => { 
        console.log(node.data);
        console.log("children: " + (node.child_left !== null && node.child_left.data)  + " | " + (node.child_right !== null && node.child_right.data));
        console.log("\n=====================================\n");
    });
    res.json(tree)
})

router.route('/algorithm/flip').post((req, res) => {

})

