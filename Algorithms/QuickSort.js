/*
  The Quick Sort Algorithm
  --------------------------
  For this we need three functions 
  - QuickSort
  - Partition
  - Swap
  And A sample array of data
  Let's say
  ``` var arr = [4,2,5,6,1]; ```
  and the output should be 
    ``` [1,2,4,5,6] ```
  Let's make it work
 */


function Swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function QuickSort(array, left, right) {
    if (left < right) {
        let pIndex = Partition(arr, left, right);
        QuickSort(arr, left, pIndex - 1);
        QuickSort(arr, pIndex + 1, right);
    }
}


function Partition(arr, left, right) {
    let pivot = arr[left];

    let i = right + 1;
    let j = right;
    for (; j > left; j--) {
        if (arr[j] >= pivot) {
            Swap(arr, --i, j);
        }
    }
    Swap(arr, --i, j);
    return i;
}


var arr = [4, 2, 5, 6, 1];
QuickSort(arr, 0, arr.length - 1);
console.log(arr);