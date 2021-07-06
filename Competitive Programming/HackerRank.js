/* -------------------------------------------------------------------------- */
/*                     Second Largest Number in The Array                     */
/* -------------------------------------------------------------------------- */



/**
 * function that returns the second largest number from the array 
 * @param {number[]} arr
 * @returns {number}
 */
function secondLarge(arr) {
    var max, secondMax 
    max = secondMax = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            secondMax = max
            max = arr[i]
        }
        else if(arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i]
        }
    }
    return secondMax;
}

var arr = [1213,514,51,1415,1513,131,1315,1314,145,5,24];
console.log(secondLarge(arr))



