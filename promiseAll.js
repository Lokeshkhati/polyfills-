const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 10);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 0);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3");
    }, 1);
});

const promise4 = 'lokesh'
const promiseAll = (promises) => {
    let pendingCount = promises.length;
    return new Promise((resolve, reject) => {
        const result = [];
        promises.forEach(async (promise, index) => {
            try {
                const value = await promise;
                result[index] = value;
                pendingCount--;
                if (pendingCount === 0) {
                    resolve(result);
                }
            } catch (error) {
                reject(error);
            }
        });
    });
};

promiseAll([promise1, promise2, promise3, promise4])
    .then((data) => console.log(data))
    .catch((error) => console.log(error));