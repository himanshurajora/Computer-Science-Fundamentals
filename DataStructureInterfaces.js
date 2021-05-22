/* -------------------------------------------------------------------------- */
/*                      Various Kinds Of Data Structures                      */
/* -------------------------------------------------------------------------- */

//Set Data Structure

let set = new Set();

set.add(10);
set.add(20);
set.add(30);

// console.log(set) -> Set(3) { 10, 20, 30 }

// Map data structure

let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts) // 1


// Stack Data Structure


/** Class Representing a Stack */
class Stack{
    constructor() 
     { 
         this.items = []; 
     } 
    
     /**
      * 
      * @param {number} element add element on top
      */

     push(element) 
    { 
     // push element into the items at top
     this.items.push(element); 
     }
   
     /**
      * 
      * @returns {number | string} remove one element from top | message str if empty stack
      */

     pop() 
     { 
     if (this.items.length == 0) 
         return "Underflow"; 
     return this.items.pop(); 
     } 
   

     /**
      * 
      * @returns {number} return the peek element
      */
     
     peek() 
     { 
         return this.items[this.items.length - 1]; 
     } 
   
     /**
      * 
      * @returns {str} all the element to in string format
      */

     printStack() 
     { 
         var str = ""; 
         for (var i = 0; i < this.items.length; i++) 
             str += this.items[i] + " "; 
         return str; 
     } 
 
 }

 
 //Queue 
/**
 * @type {number[]}
 */
 queue = []
 queue.push(1);
 queue.push(2)

 // console.log(queue)

 queue.shift()

 // console.log(queue)