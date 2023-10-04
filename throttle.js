
const throttle = (callback, delay) => {
    let timerId
    let lastTimeCalled = 0
    return (...args) => {
        let currentTime = Date.now()
        let differenceTime = currentTime - lastTimeCalled
        let delayRemaining = delay - differenceTime

        const invokeCallback = () => {
            callback.apply(this, ...args)
            lastTimeCalled = Date.now()
        }
        if (delayRemaining > 0) {
            if (timerId) clearTimeout(timerId)
            timerId = setTimeout(invokeCallback, delayRemaining)

        } else {
            invokeCallback()
        }
    }
}


throttle(() => { }, delay)