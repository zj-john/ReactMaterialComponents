import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransferInput from './TransferInput.jsx';
import TransferDrag from './TransferDrag.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <TransferInput />
        <TransferDrag />
      </div>
    );
  }
}
export default App;
