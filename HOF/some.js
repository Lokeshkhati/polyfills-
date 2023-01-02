const arr = [10, 20, 30, 40, 50, 60]

// const newArr = arr.some((value, index, array) => {
//     return (value < 40)
// })

Array.prototype.mySome = function (callback) {
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            return true
        }
    }
    return false
}

const newArr = arr.mySome((value, index, array) => {
    return (value === 400)
})

console.log(newArr)