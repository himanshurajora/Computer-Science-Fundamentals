/* -------------------------------------------------------------------------- */
/*                             Recursion Examples                             */
/* -------------------------------------------------------------------------- */

/**
 * 
 * @param {number} n - the nth fibonachi number
 * @returns {number} nth fibonachi number
 * @example
 *  fibonachi(6) => 8
 * 
 * 
 */

function fibonacci(n){
    if(n <= 2) return 1
    else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

// console.log(fibonacci(6))

/**
 * 
 * @param {number} n - the number
 * @returns {number} - the factorial of given number n
 * @example
 * factorial(5) => 120
 */

function factorial(n){
    if(n <= 0)return 1
    else{
        return n * factorial(n-1)
    }
}

// console.log(factorial(5))