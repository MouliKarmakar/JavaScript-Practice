let str="ankush";
let N=str.length;
vowelAndConsonantCount(N,str);

function vowelAndConsonantCount(N, str) {
    let vowel=0;
    let consonant=0;
    for(let i=0;i<N;i++){
        let ch=str[i];
        if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
            vowel++;
        }
        else{
            consonant++;
        }
    }
    console.log(vowel+" "+consonant);
  }
  