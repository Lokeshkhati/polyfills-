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
