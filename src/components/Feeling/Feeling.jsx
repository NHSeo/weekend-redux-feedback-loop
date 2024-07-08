import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState('');

  const handleNext = () => {
    dispatch({ type: 'SET_FEELING', payload: feeling });
    history.push('/understanding');
  };

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <input
        data-testid="input"
        type="number"
        value={feeling}
        placeholder="Scale 1 to 5"
        onChange={(e) => setFeeling(e.target.value)}
      />
      <button data-testid="next" onClick={handleNext}>Next</button>
    </div>
  );
}

export default Feeling;
