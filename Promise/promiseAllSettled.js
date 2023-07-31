const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1')
    }, 2000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2')
    }, 3000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p3')
    }, 4000)
})

// takes array of promises, returns a new promise which gets fulfilled on fulfillment of promise from array of promises

const promiseAllSettled = (promises) => {
    let pendingCount = promises.length;

    return new Promise((resolve) => {
        const results = []
        promises.forEach(async (promise, index) => {
            try {
                const value = await promise
                results[index] = { status: 'fulfilled', value }
                pendingCount -= 1
            }
            catch (error) {
                results[index] = { status: 'rejected', reason: error }
                pendingCount -= 1
            }
            if (pendingCount === 0) resolve(results)
        })
    })
}


promiseAllSettled([p1, p2, p3]).then((data) => console.log(data)).catch((error) => console.log(error))

