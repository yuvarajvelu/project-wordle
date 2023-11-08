import React from 'react';

function GameResult({ result, tryCount, answer }) {
 
  return (<>
    {
      result==='won' && 
      (<div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {tryCount===1?`1 guess`:`${tryCount} guesses`}</strong>.
        </p>
      </div>)
    }
    {
      result==='lost' && 
      (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )
    }
  </>);
}

export default GameResult;
