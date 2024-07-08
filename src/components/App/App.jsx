import React from 'react';
import './App.css';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import ThankYou from '../Thankyou/Thankyou';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/" component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
        <Route path="/review" component={Review} />
        <Route path="/thank-you" component={ThankYou} />
        <Redirect to="/" />
      </Router>
    </div>
  );
}

export default App;
