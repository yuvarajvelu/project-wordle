import React from 'react';
import KeyboardView from '../KeyboardView';
function TextInput({ handleSetGuesses, result, guessStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSetGuesses(tentativeGuess);
    setTentativeGuess('');
  }
  const handleChange = (event) => {
    let value = event.target.value.toUpperCase();
    setTentativeGuess(value);
  }
  const handleChangeFromKeyboard = (character) => {
    if(tentativeGuess.length >= 5) {
      return;
    }
    let modified_guess = tentativeGuess + character.toUpperCase()
    setTentativeGuess(modified_guess);
  }

  let disabled = result !== 'inprogress' ? true : false;
  return (<div>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input type='text' id='guess-input' minLength={5} maxLength={5} pattern='[A-Za-z]{5}'  value={tentativeGuess} onChange={handleChange} disabled={disabled} />
    </form>
    <KeyboardView handleChangeFromKeyboard={handleChangeFromKeyboard} guessStatus={guessStatus}/>
  </div>);
}

export default TextInput;
