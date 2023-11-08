import React from 'react';
import Banner from '../Banner';
function WonBanner({ guessCount, restartGame }) {
  return (
    <Banner status='happy' buttonAction={restartGame} actionText={'RESTART GAME'}>
      <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong> {guessCount===1?`1 guess`:`${guessCount} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
