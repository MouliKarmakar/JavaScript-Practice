let str="ankush";
let N=str.length;
checkVowel(N,str);


function checkVowel(N, str) {
    let vowel=0;
    for(let i=0;i<N;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            vowel++;
        }
    }
    if(vowel>0){
        console.log("true");
    }
    else{
        console.log("false");
    }
    
  }