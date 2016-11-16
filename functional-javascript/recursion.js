/* 自己实现的reduce，和Array的reduce相比少了第三和第四个参数 */
function reduce(arr, fn, init) {
    if (!arr.length) {
        return init; }
    var head = arr[0];
    var tail = arr.slice(1);
    return reduce(tail, fn, fn(init, head));
}

/* 标准的实现 */
function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
            if (index > arr.length - 1) return value // end condition
            return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
        })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce;
