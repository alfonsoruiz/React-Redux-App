import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from './actions/index';

import './App.css';

const App = props => {
  const getQuote = event => {
    event.preventDefault();
    props.getQuote();
  };

  return (
    <div className="App">
      <h1>Inside Kanye's Brain</h1>
      <p>Click on me to experience my genius</p>
      <img
        alt="kanye west"
        onClick={getQuote}
        src="https://cdn.dribbble.com/users/2364329/screenshots/5548095/untitled-1.jpg"
      />
      <h2>{props.quote}</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote
  };
};

export default connect(
  mapStateToProps,
  { getQuote }
)(App);
