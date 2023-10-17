function findMove(s) {
    const moves = [];
  
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === '+' && s[i + 1] === '+') {
        const nextState = s.slice(0, i) + '--' + s.slice(i + 2);
        moves.push(nextState);
      }
    }
  
    return moves;
  }
  
  const input = "++-++";
  const result = findMove(input);
  console.log(result);
  