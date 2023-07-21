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
      resolve('p3')
    }, 4000)
  })
  
  const customPromiseAll = (promises) => {
    const result = []
  
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => promise.then((data) => {
        result.push(data)
        if (index === promises.length - 1) resolve(result)
      }).catch((error) => reject(error)))
    })
  }
  customPromiseAll([p1, p2, p3]).then((data) => console.log(data)).catch((error) => console.log(error))
  
  // takes array
  // returns single promises which will return an array of solved values in the form of an array
  // 
  
  
      // 