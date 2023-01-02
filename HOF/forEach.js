let arr = [1, 2, 3, 4, 5]

// arr.forEach((value, index, array) => {
//     console.log(value, index, array)
// })

// here prototype attaches the method myForEach with the Array
Array.prototype.myForEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this)
    }
}

arr.myForEach((value, index, array) => {
    console.log(value, index, array)
})