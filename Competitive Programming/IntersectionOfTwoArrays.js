/* -------------------------------------------------------------------------- */
/*                         Intersection of Two Arrays                         */
/* -------------------------------------------------------------------------- */


var a = [1, 2, 3, 4, 5, 6]
var b = [3, 4]

function inArray(value) {
    return b.indexOf(value) !== -1;
}

var c = a.filter(inArray)

console.log(c);
