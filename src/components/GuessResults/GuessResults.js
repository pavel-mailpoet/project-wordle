import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js"

function Cell({ letter, status }) {
  return (
    <span className={`cell ${status}`}>{letter}</span>
  );
}

function Guess({ guess, uniqueKey, result }) {
  return (
    <p className="guess" key={uniqueKey}>
      {guess.split('').map((letter, index) => (
        <Cell letter={letter} status={result[index].status} key={`${uniqueKey}-${index}`} />
      ))}
    </p>
  );
}

function EmptyGuess() {
  return (
    <p className="guess">
      {Array.from({ length: 5 }).map((_, index) => (
        <span className="cell" key={`empty-${index}`}></span>
      ))}
    </p>
  );
}

function GuessResults({ guesses }) {
  console.log(guesses);
  
  return (
    <div className="guess-results">
      {guesses.map(({guess, result}) => (
        <Guess guess={guess} result={result} uniqueKey={guess} key={guess} />
      ))}
      {Array.from({ length: NUM_OF_GUESSES_ALLOWED - guesses.length }).map((_, index) => (
        <EmptyGuess uniqueKey={`empty-${index}`} key={`empty-${index}`} />
      ))}
    </div>
  );
}

export default GuessResults;
