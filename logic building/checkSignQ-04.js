// Input: 2, 5, 7
// Output: "+++"
// Input: 8, -3, 4
// Output: "++-"

function checkSign(num1,num2,num3){
    let positive=0;
    if(num1>0){
        positive++;
    }
    if(num2>0){
        positive++;
    }
    if (num3 > 0) {
        positive++;
    }

    if(positive==3){
        return '+++';
    }
    else if(positive==2){
        return '++-'
    }
    else if(positive==1){
        return '+--';
    }
    else{
        return'---';
    }
}

console.log(checkSign(8,-3,4));