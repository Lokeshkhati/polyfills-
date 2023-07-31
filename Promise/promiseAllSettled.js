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
    return new Promise((resolve) => {
        const results = []
        promises.forEach(async (promise, index) => {
            try {
                const value = await promise
                results[index] = { status: 'fulfilled', value }
            }
            catch (error) {
                results[index] = { status: 'rejected', reason: error }
            }
            if (index === promises.length - 1) resolve()
        })
    })
}


Promise.allSettled([p1, p2, p3]).then((data) => console.log(data)).catch((error) => console.log(error))
