let image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
console.log(bestflipAndInvertImage(image));
function bestflipAndInvertImage(image) {
    // Write your code inside this function only.
    let flip=[];
    for(let i=0;i<image.length;i++){
        let ar=image[i];
        let arr=[];
        for(let j=ar.length-1;j>=0;j--){
            arr.push(ar[j]);
        }
        for(let k=0;k<arr.length;k++){
            if(arr[k]==1){
                arr[k]=0;
            }
            else if(arr[k]==0){
                arr[k]=1;
            }
        }
        flip.push(arr);
    }
    return flip;
}