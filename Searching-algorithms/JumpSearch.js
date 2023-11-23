function jumpSearch(arr, target) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let previous = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        previous = step;
        step =step + Math.floor(Math.sqrt(n));
        if (previous >= n) {
            return -1;
        }
    }
    while (arr[previous] < target) {
        previous++;
        if (previous== step) {
            return -1;
        }
    }
    if (arr[previous] === target) {
        return previous;
    }
    return -1;
}

let arr=[1,3,5,6,7,8,9];
console.log(jumpSearch(arr,9));