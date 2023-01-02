// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

function isBigEnough(value, index, array) {
    return value > 10;
}
// console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

Array.prototype.myEvery = function (callback) {
    for (let index = 0; index < this.length; index++) {
        if (!callback(this[index], index, this)) {
            return false
        }
    }
    return true
}

console.log([12, 5, 8, 130, 44].myEvery(isBigEnough)); // false
console.log([12, 54, 18, 130, 44].myEvery(isBigEnough)); // true