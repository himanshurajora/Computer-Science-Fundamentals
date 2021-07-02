/* -------------------------------------------------------------------------- */
/*                                 Merge Sort                                 */
/* -------------------------------------------------------------------------- */


function merge(left, right) {
    var arr = [];
    while (left.length && right.length) {
        if(left[0] < right[0]){
            arr.push(left.shift())
        }
        else{
            arr.push(right.shift())
        }  
    }
    return [...arr, ...left, ...right]
}

function mergeSort(arr) {
    var mid = Math.floor(arr.length / 2)
    if (arr.length < 2) {
        return arr;
    }
    const left = arr.splice(0, mid);
    return merge(mergeSort(left), mergeSort(arr))
}

var arr = [7,5,1,2,5,8,5,4]
console.log(mergeSort(arr));
