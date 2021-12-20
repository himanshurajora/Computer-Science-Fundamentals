
class Queue {
    arr = []
    enqueue(...value) {
        this.arr.push(...value)
        return `items added`
    }
    dequeue(){
        if(this.isEmpty())return "underflow"
        return this.arr.shift()
    }
    peek(){
        if(this.isEmpty())return "no elements"
        return this.arr[0]
    }
    isEmpty(){
        if(this.arr.length==0)return true
    }
    display(){
        this.arr.forEach((value)=>{console.log(value);})
        return this.arr
    }
}


// queue tests for enqueue, dequeue, peek, isEmpty, display
// var q = new Queue()
// q.enqueue(1,2,3,4,5)
// q.display()
// q.dequeue()
// q.display()
// q.peek()
// q.display()
// q.isEmpty()
// q.display()



class Deque{
    
}