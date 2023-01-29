let arr = [1, 2, 3, 4, 5, 6]

// let newArr = arr.filter((item) => item % 2 === 0)

Array.prototype.myFilter = function (callback) {
    let returnedArray = []
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this) !== undefined) {
            returnedArray.push(callback(this[index], index, this))
        }
    }
    return returnedArray
}

let newArr = arr.myFilter((value, index, array) => {
    if (value % 2 === 0) {
        return value
    } 
})

console.log(newArr)
console.log(arr)