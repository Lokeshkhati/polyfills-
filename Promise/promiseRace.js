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
    }, 0)
})


// takes array of promises, returns a promise, 


const promiseRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach(async (promise) => {
            try {
                const value = await promise
                resolve(value)
            } catch (error) {
                reject(error)
            }
        })

    })
}


promiseRace([p1, p2, p3]).then((res) => console.log(res)).catch((error) => console.log(error))