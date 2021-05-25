
/* -------------------------------------------------------------------------- */
/*                          BinaryTree Implementation                         */
/* -------------------------------------------------------------------------- */

/** Class representing a binary tree */

class BinaryTree {
/**
 * 
 * @param {number} value value to assign in constructor 
 */
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    /**
     * - Explores all the nodes in out tree
     * - Print Each Value
     * @param {BinaryTree} tree
     * @default tree = this
     * @example 
     * var tree = new BinaryTree(12)
     * tree.traverse() 
     */

    traverse(tree = this) {
        console.log(tree.value)
        if (tree.left) this.traverse(tree.left)
        if (tree.right) this.traverse(tree.right)
    }

    /**
     * 
     * @param {number} value key to search
     * @returns {boolean} it contain the key or not
     */

    contains(value, tree = this) {
        // console.log(tree.value === value)
        if (tree.value === value) { return true }

        return (tree.left && tree.left.contains(value, this.left) ? true : false) ||
            (tree.right && tree.right.contains(value, tree.right) ? true : false)

    }
}

var tree = new BinaryTree(12)
tree.left = new BinaryTree(10)
tree.right = new BinaryTree(11)
tree.left.left = new BinaryTree(9)

tree.traverse()
console.log(tree.contains(10))