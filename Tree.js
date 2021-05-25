/**
 * @author Himanshu Jangid 
 * @himanshurajora
 * @summary Class Representing a Basic Tree
 */
class Tree {
    /** 
     * @param {string} value 
     */
    constructor(value) {
        this.value = value
        this.children = [];
    }

/**
 *  @summary Takes a tree as a parameter and traverses all trough that tree from top to bottom
 * @param {Tree} tree
 */

    traverse(tree = this) {
        console.log(tree.value)
        tree.children.forEach((val) => {
            this.traverse(val)
        })
    }
    /**
     * 
     * @param {number} value value for the new node to add
     * @returns {Tree} the new tree formed by insertion  
     */

    insertChild(value) {
        const newTree = new Tree(value);
        this.children.push(newTree)
        return this;
    }

}




var tree = new Tree(12)
tree.insertChild(13)
tree.insertChild(14)
tree.children[0].insertChild(20)

tree.traverse()



