import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Basic from './Basic.jsx';
import CustomFilters from './CustomFilters.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Basic />
        <CustomFilters />
      </div>
    );
  }
}
export default App;
