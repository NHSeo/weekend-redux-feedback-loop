import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState('');

  const handleNext = () => {
    dispatch({ type: 'SET_UNDERSTANDING', payload: understanding });
    history.push('/support');
  };

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <input
        data-testid="input"
        type="number"
        value={understanding}
        placeholder="Scale 1 to 5"
        onChange={(e) => setUnderstanding(e.target.value)}
      />
      <button data-testid="next" onClick={handleNext}>Next</button>
    </div>
  );
}

export default Understanding;
