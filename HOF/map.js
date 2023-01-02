let arr = [1, 2, 3, 4, 5, 6]

// let newArr = arr.map((value, index, array) => {
//     return value * 2
// })

Array.prototype.myMap = function (callback) {
    let items = []
    for (let index = 0; index < this.length; index++) {
        items.push(callback(this[index], index, this))
    }
    return items
}

let newArr = arr.myMap((value, index, array) => {
    return value * 2
})

console.log(arr)
console.log(newArr)