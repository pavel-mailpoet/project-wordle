import { useState } from 'react';
import InputForm from '../InputForm';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');


  return (
    <>
      <GuessResults guesses={guesses} />

      
      <InputForm 
        submitGuess={
          (guess) => {
            const result = checkGuess(guess, answer);
            const newGuesses = [...guesses, {guess, result}];
            
            if (result.every(({status}) => status === 'correct')) {
              setGameStatus('won');
            } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
              setGameStatus('lost');
            }

            setGuesses(newGuesses);
          }
        }
        gameStatus={gameStatus}
      />
      
      {gameStatus === 'won' && <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div>}
      {gameStatus === 'lost' && <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>}
    </>
  );
}

export default Game;
