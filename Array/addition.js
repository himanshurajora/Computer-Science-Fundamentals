var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(array, index = 0) {
    if (index < array.length) {
        return array[index] + sum(array, index + 1)
    }
    return 0;
}

console.log(sum(array))