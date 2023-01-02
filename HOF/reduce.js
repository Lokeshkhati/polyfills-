const arr = [10, 20, 30, 40, 50, 90]

// const sum = arr.reduce((acc, val) => {
//     return acc + val
// })


Array.prototype.myReduce = function (callback) {

    let currentVal = 0;
    for (let index = 0; index < this.length; index++) {
        currentVal = callback(currentVal, this[index], index, this)
    }
    return currentVal
}

const sum = arr.myReduce((acc, val) => {
    return acc + val
})
console.log(sum)