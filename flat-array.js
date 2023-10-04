const arr = [[1, 2], 3, 4, [[4, 5]]];

const flattener = (elements) => {
    const result = [];

    const flatten = (arr) => {
        for (let item of arr) {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                result.push(item);
            }
        }
    };
    flatten(elements);
    return result;
};