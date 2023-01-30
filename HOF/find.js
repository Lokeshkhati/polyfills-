let arr = [1, 2, 3, 4, 5]


Array.prototype.myFind = function (callback) {

    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            return this[index]
        }
    }

    return undefined

}

const found = arr.myFind((value) => {
    return value === 4
})
console.log(found)