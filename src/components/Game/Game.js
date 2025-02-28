import { useState } from 'react';
import InputForm from '../InputForm';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  


  return (
    <>
      <GuessResults guesses={guesses} />
      <InputForm submitGuess={
        (guess) => {
          const result = checkGuess(guess, answer);
          console.log('result', result);
          
          setGuesses([...guesses, {guess, result}]);
        }
      } 
      />
    </>
  );
}

export default Game;
