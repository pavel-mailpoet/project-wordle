import React from 'react';

function Guess({ guess }) {
  return (
    <p className="guess" key={guess}>
      {guess}
    </p>
  );
}

function GuessResults({ guesses }) {
  console.log(guesses);
  
  return (
  <div className="guess-results">
    {guesses.map((guess) => (
      <Guess guess={guess} />
    ))}
  </div>);
}

export default GuessResults;
