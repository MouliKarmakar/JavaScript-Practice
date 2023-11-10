var searchRange = function(nums, target) {
    const firstOccurrence=(nums,target)=>{
     let start=0;
     let end=nums.length-1;
     let firstOccurrence=-1;
     while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(nums[mid]==target){
            firstOccurrence=mid;
            end=mid-1;
        }
        else if(nums[mid]<target){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
     }
     return firstOccurrence;
    };
  
    const lastOccurrence=(nums,target)=>{
      let start=0;
      let end=nums.length-1;
      let lastOccurrence=-1;
      while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(nums[mid]==target){
            lastOccurrence=mid;
            start=mid+1;
        }
        else if(nums[mid]<target){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
      }
      return lastOccurrence;
    };
  
    let firstIndex=firstOccurrence(nums,target);
    let lastIndex=lastOccurrence(nums,target);
  
    if(firstIndex!==-1) {
      return [firstIndex,lastIndex];
    } 
    else{
      return [-1,-1];
    }
  };
  
  // Example usage:
  const nums = [5,7,7,8,8,10];
  const target = 7;
  console.log(searchRange(nums, target)); // Output: [3, 4]
  