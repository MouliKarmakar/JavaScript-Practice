Input: [70, 20, 30, 50], [30, 40, 50, 60, 70]
Output: [30, 50, 70]
Input: [1, 2, 2, 3, 4, 5], [2, 3, 3, 6]
Output: [2, 3]

function arrayIntersection(array1,array2){
    let newArr=[];
    for(let i=0;i<array1.length;i++){
        if(array2.includes(array1[i])){
            newArr.push(array1[i]);
        }
    }
    if(newArr.length>0){
        let mySet=new Set(newArr);
        return Array.from(mySet);
    }
    else{
        return [];
    }
}
console.log(arrayIntersection([70, 20, 30, 50,30], [40, 80, 70, 10,30,30]));