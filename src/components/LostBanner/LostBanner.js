import React from 'react';
import Banner from '../Banner';
function LostBanner({answer, restartGame}) {
  return (
    <Banner status='sad' buttonAction={restartGame} actionText={'RESTART GAME'}>
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </Banner>
  );
}

export default LostBanner;
