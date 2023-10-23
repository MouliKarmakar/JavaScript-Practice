// longest substring witout repeating character

let str="abbbcdeecastorrst";
console.log(logestSubstring(str));

function logestSubstring(str){
    let maxLength=0;
    let ans="";
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            let subStr=str.substring(i,j);
            let flag=isCharacterRepeating(subStr);
            if(flag==false && subStr.length>maxLength){
                maxLength=subStr.length;
                ans=subStr;
            }
        }
    }
    return `The length is ${maxLength} and the subString is "${ans}"`;
}

function isCharacterRepeating(s){
    let map={};
    for(let i=0;i<s.length;i++){
        let ch=s[i];
        if(!map[ch]){
            map[ch]=1;
        }
        else{
            map[ch]++;
        }
    }
    for(let key in map){
        if(map[key]>1){
            return true;
        }
    }
    return false;
}
