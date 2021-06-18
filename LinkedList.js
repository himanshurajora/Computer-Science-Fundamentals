class LinkedList{
    constructor(value){
        this.next = null;
        this.value = value;
    }

    setNext(next){
        this.next = next; 
    }

    getValue(){
        return this.value;
    }

}

function traverse(List){
    console.log(List.next)
    while(List != null){
        console.log(List.value);
        List = List.next;
    }
}

var START = new LinkedList(10);
var next = new LinkedList(20);
START.setNext(next);

traverse(START);