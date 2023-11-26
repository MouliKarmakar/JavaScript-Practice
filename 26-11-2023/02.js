function determineWinner(X, Y) {
    // Your code goes here
    let count=X+Y;
    if(count%2==0){
      return "Ansh";
    }
    else{
      return "Jay";
    }
  
  }
 let X=2;
 let Y=2;
 console.log(determineWinner(X,Y));