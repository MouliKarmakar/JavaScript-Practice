function subStrUnderCond(s){
    let count=0;
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            let str="";
            for(let k=i;k<=j;k++){
                str=str+s[k];
            }
            if(str[0]==str[str.length-1]){
                count++;
            }
        }
    }
    console.log(count);
    }
    let str="abcab";
    subStrUnderCond(str);