
/**
 * 
 * @param {number} current The current number provided
 * @param {number} max the max number provided
 * @returns 
 */

function basicRecursion(current, max){
    if(current > max) return
    console.log(current)
    basicRecursion(current + 1, max)
}

basicRecursion(1,5)