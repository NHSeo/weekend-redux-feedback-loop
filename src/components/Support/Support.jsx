import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [support, setSupport] = useState('');

  const handleNext = () => {
    dispatch({ type: 'SET_SUPPORT', payload: support });
    history.push('/comments');
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <input
        data-testid="input"
        type="number"
        value={support}
        placeholder="Scale 1 to 5"
        onChange={(e) => setSupport(e.target.value)}
      />
      <button data-testid="next" onClick={handleNext}>Next</button>
    </div>
  );
}

export default Support;
