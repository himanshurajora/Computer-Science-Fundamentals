

/* -------------------------------------------------------------------------- */
/*                             Shorting Algorithms                            */
/* -------------------------------------------------------------------------- */

let arr = [48, 64, 50, 75, 49, 65, 70, 76, 46, 58]

/**
 * 
 * @param {number[]} arr - array to sort 
 * @returns {number[]} - shorted array
 */

function bubbleSort(arr) {
    let i = arr.length - 1;
    do {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i--;
    } while (i > 1);
    return arr;
}
// console.log(bubbleSort(arr));


/**
 * @param {number[]} arr - array to sort 
 * @returns {number[]} - shorted array
 */

function bubbleSort2(arr) {
    let swapped = false;
    do {
        swapped = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
// console.log(bubbleSort2(arr));



// Insertion Sort

/**
 * 
 * @param {number[]} arr array of nums
 * @returns {number[]} sorted arr
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const nums = arr.splice(i, 1);
                arr.splice(j, 0, nums[0])
            }

        }
    }
    return arr
}

// console.log(insertionSort(arr))

/**
 * 
 * @param {number[]} arr - array of numbers to sort
 * @returns {numeber[]} sorted array
 * 
 */

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const length = arr.length;
    const middle = Math.floor(length / 2)
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, length)

    const sortedLeft = mergeSort(left);
    const sortedRigth = mergeSort(right);

    return stitch(sortedLeft, sortedRigth);
}
/**
 * 
 * @param {number[]} left 
 * @param {number[]} right
 * @returns {number[]} stitched array 
 */ 
function stitch(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

console.log(mergeSort(arr))


// Quick Sort