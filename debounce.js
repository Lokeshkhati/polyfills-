
const debounce = (callback, delay = 300, immediate = false) => {
    let timerId;
    return (...args) => {
        let shouldCallImmediate = !timerId && immediate === true;
        if (shouldCallImmediate) {
            callback.apply(this, ...args);
        }
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            if (!immediate) {
                callback.apply(this, ...args);
            }
            timerId = null;
        }, delay);
    };
};