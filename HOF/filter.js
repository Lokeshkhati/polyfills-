let arr = [1, 2, 3, 4, 5, 6]

// let newArr1 = arr.filter((item) => item % 2 === 0)

Array.prototype.myFilter = function (callback) {
    let returnedArray = []
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            returnedArray.push(this[index])
        }
    }
    return returnedArray
}


let newArr = arr.myFilter((value, index, array) => value%2===0)

const newArr1 = arr.myFilter((value, index, array) =>value>2)

console.log(newArr1)
console.log(newArr)