import React from 'react';
function KeyboardView({ handleChangeFromKeyboard, guessStatus }) {
  const keyboardKeys = {
    'firstRow':["Q","W","E","R","T","Y","U","I","O","P"],
    'secondRow': ["A","S","D","F","G","H","J","K","L"],
    'thirdRow':["Z","X","C","V","B","N","M"]
  }
  return (
    <div>
      {Object.keys(keyboardKeys).map(row => (
        <div key={row}  className='keyboard-view'>
        {keyboardKeys[row].map(content => (
          <button key={content} className={guessStatus && guessStatus[content]? `alphabet ${guessStatus[content]}`: 'alphabet'} onClick={()=>handleChangeFromKeyboard(content)}>{content}</button>
        ))}
        </div>
      ))}
    </div>
  );
}

export default KeyboardView;
