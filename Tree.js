
class Tree{
    constructor(value){
        this.value = value;
        this.children = [];
    }

    insertChiled(value){
        const newTree = new Tree(value);
        this.children.push(newTree);
        return newTree;
    }
    removeChild(value){

    }
}

const tree = new Tree(12);
tree.insertChiled(13)
console.log(tree);