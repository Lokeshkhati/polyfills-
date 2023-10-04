const memoize = (fn) => {
    const cache = {}
    return (...args) => {
        const key = JSON.stringify(args)

        if (cache.hasOwnProperty(key)) {
            console.log('from cache');
            return cache[key]
        } else {
            console.log('from computation');
            cache[key] = fn(...args)
            return cache[key]
        }
    }
}

const sum = memoize((a, b) => a + b)

console.log(sum(2, 4))
console.log(sum(2, 4))