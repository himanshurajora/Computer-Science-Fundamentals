/** Binary Search Tree */

class Tree{
    constructor(){
        this.root = null
    }
     
    toObject(){
        return this.root
    }

    /**
     * 
     * @param {number} value new value to add into the tree 
     * @returns {number}  1 if done 
     */

    add(value){
        if(this.root === null){
            this.root = new Node(value)
            return;
        }

        let current = this.root;
        while(true){
            if(current.value > value){
                // go left
                if(current.left){
                    current = current.left;
                }
                else{
                    current.left = new Node(value)
                    return 1
                }
            }
            else{
                if(current.right){
                    current = current.right;
                }
                else{
                    current.right = new Node(value)
                    return 1
                }
            }
        }
    }
}


class Node{
    constructor(value, left=null, right=null){
        this.value = value
        this.left = left
        this.right = right
    }

    add(value){
        if(value < this.value){
            // go left
            if(this.left){
                this.left.add(value)
            }
            else{
                this.left = new Node(value)
            }
        }
        else{
            // go right
        }
    }
}