import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ThankYou() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNewFeedback = () => {
    dispatch({ type: 'RESET_FEEDBACK' });
    history.push('/');
  };

  return (
    <div>
      <h1>Thank You!</h1>
      <button data-testid="next" onClick={handleNewFeedback}>Leave New Feedback</button>
    </div>
  );
}

export default ThankYou;
