import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Basic from './Basic.jsx';
import WithLocale from './WithLocale.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Basic />
        <WithLocale />
      </div>
    );
  }
}
export default App;
