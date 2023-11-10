var fairCandySwap = function(aliceSizes, bobSizes) {
    let aliceSum=0;
    let bobSum=0;
    let mapOfBobSizes=new Map();
    
    for(let i=0;i<aliceSizes.length;i++){
        aliceSum=aliceSum+aliceSizes[i];
    }
    for(let j=0;j<bobSizes.length;j++){
        bobSum=bobSum+bobSizes[j];
        mapOfBobSizes.set(bobSizes[j],true);
    }

    let target=(aliceSum+bobSum)/2;

    for(let i=0;i<aliceSizes.length;i++){
        let a=aliceSizes[i];
        let b=target-(aliceSum-a);

        if(mapOfBobSizes.has(b)){
            return [a,b];
        }
    }
};
let aliceSizes = [1,2];
let  bobSizes = [2,3];
console.log(fairCandySwap(aliceSizes,bobSizes));