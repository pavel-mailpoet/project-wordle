import { useState } from 'react';
import InputForm from '../InputForm';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function submitGuess(guess) {
    if (guess.length === 0) return;
    console.log(guess);
  }

  return (
    <>
      <InputForm submitGuess={submitGuess} />
    </>
  );
}

export default Game;
