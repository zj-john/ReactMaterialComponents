import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DragList from './DragList.jsx';
import DragToolBar from './DragToolBar.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <DragList />
        <DragToolBar />
      </div>
    );
  }
}
export default App;
