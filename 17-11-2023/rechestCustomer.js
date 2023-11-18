var maximumWealth = function(accounts) {
    let max=0;
    for(let i=0;i<accounts.length;i++){
        let sum=0;
        for(let j=0;j<accounts[0].length;j++){
            sum=sum+accounts[i][j];
        }
        if(max<sum){
            max=sum;
        }
    }
    return max;
};
let accounts = [[1,2,3],[3,2,1]];
console.log(maximumWealth(accounts));