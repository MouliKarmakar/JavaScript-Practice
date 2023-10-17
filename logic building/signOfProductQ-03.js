// Input: [2, -3, 5, 4]
// Output: -1
// Input: [1, 2, 0]
// Output: 0

function signOfProduct(nums){
    let negative=0;
    let zero=0;
    for(let num of nums){
        if (num<0) {
            negative++;
        }
        else if(num==0){
            zero++;
        }
    }
    if(zero>0){
        return 0;
    }
    else if(negative>0){
        if(negative%2==0){
            return 1;
        }
        else{
            return -1;
        }
    }
    else{
        return 1;
    }
}

console.log(signOfProduct([1, 2, 5]));