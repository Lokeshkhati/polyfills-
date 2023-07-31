const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1')
    }, 9000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p2')
    }, 3000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p3')
    }, 4000)
})

const promiseAny = (promises) => {
    let pendingCount = promises.length


    return new Promise((resolve, reject) => {
        const errors = []
        if (pendingCount === 0) {
            reject(new AggregateError([]))
        }
        promises.forEach(async (promise, index) => {
            try {
                const value = await promise
                resolve(value)
            } catch (error) {
                errors[index] = error
                pendingCount -= 1
                if (pendingCount === 0) {
                    reject(new AggregateError(errors))
                }
            }

        })
    })
}


promiseAny([p1, p2, p3]).then((res) => console.log(res)).catch((error) => console.log(error))