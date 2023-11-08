import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import TextInput from '../TextInput';
//import GuessList from '../GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessList from '../GuessList/GuessList';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import { checkGuess } from '../../game-helpers'
// Pick a random word on every pageload.
//const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
//console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [result, setResult] = React.useState('inprogress');
  // console.info(`answer ${answer}`)
  // console.log('guesses',guesses)
  const handleSetGuesses = (new_guess) => {
    let validateGuess = checkGuess(new_guess, answer);
    let newGuesses = [...guesses, {'guess':new_guess,'validationResult': validateGuess}]
    setGuesses(newGuesses)
    if (new_guess === answer) {
      setResult('won')
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setResult('lost')
    }
  }
  const guessStatus = guesses.reduce((final,guess) => {
    guess['validationResult'].forEach(({letter, status}) =>{
      final[letter] = status
    })
    return final;
  },{})
  const restartGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setResult('inprogress');
  }
  // console.info(guessStatus)
  return (
    <>
      
      <GuessList guesses={guesses} />
      <TextInput handleSetGuesses={handleSetGuesses} result={result} guessStatus={guessStatus}/>
      {result==='won' && <WonBanner guessCount={guesses.length} restartGame={restartGame}/>}
      {result==='lost' && <LostBanner answer={answer} restartGame={restartGame}/>}
    </>
  );
}

export default Game;
