// Two-pointer technique.
function reverse(arr){
    let left=0;
    let right=arr.length-1;
    while(left<right && right>left){
        if(left!==right){
            let temp=arr[left];
            arr[left]=arr[right];
            arr[right]=temp;
        }
        left++;
        right--;
    }
    }
    let a=[1,2,3,4,5];
    reverse(a);
    console.log(a);