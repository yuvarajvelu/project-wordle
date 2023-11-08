import React from 'react';
import { range } from '../../utils'
//import { checkGuess } from '../../game-helpers'
function Cell({ letter, status }) {
  return (
    <span className={status}>{letter}</span>
  )
}
function Guess({ predictedGuess }) {
  //let value = checkGuess(predictedGuess,answer);
  let value = predictedGuess? predictedGuess['validationResult']:null;
  return (
    <div>
      <p className="guess">
        {range(5).map((el) => (
          <Cell key={el} letter={ value ? value[el]['letter'] : ''} status={ value ? `cell ${value[el]['status']}`: 'cell' }/>
        ))}
      </p>
    </div>
  );
}

export default Guess;
