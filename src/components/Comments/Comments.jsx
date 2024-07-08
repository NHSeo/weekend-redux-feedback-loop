import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [comments, setComments] = useState('');

  const handleNext = () => {
    dispatch({ type: 'SET_COMMENTS', payload: comments });
    history.push('/review');
  };

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <input
        data-testid="input"
        type="text"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button data-testid="next" onClick={handleNext}>Next</button>
    </div>
  );
}

export default Comments;
