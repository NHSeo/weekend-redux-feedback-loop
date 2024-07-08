import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {
  const feedback = useSelector(state => state.feedback);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    axios.post('/api/feedback', feedback)
      .then(response => {
        dispatch({ type: 'RESET_FEEDBACK' });
        history.push('/');
      })
      .catch(error => {
        console.error('Error Feedback', error);
      });
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>
      <p>Feeling: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.support}</p>
      <p>Comments: {feedback.comments}</p>
      <button data-testid="next" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Review;
