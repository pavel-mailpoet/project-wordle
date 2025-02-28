import { useState } from 'react';

function InputForm({ submitGuess }) {
  const [guess, setGuess] = useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        submitGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
        maxLength={5}
        title="5 letter word"
      />
    </form>
  );
}

export default InputForm;
