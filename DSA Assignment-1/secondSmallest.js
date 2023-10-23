function secondMin(arr) {
    let min = arr[0];
    let secMin = Infinity;

    if (arr.length >= 2) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                secMin = min;
                min = arr[i];
            } 
            else if (arr[i] < secMin && arr[i] !== min) {
                secMin = arr[i];
            }
        }
    }
    if (secMin == Infinity) {
        return "No Second Minimum Value Found";
    } else {
        return secMin;
    }
}
console.log(secondMin([1, 2, 3, 4, 5, 6])); 
console.log(secondMin([1, 2, 2, 3, 4, 5, 6]));
