import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Transferdrag from 'plugins/Transferdrag';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx'

const styles = theme => ({
  root: {
    width: "50%"
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      right: [
        { name: 'this is right one', id: 'r1' },
        { name: 'and this is right two', id: 'r2' },
        { name: 'right three is here', id: 'r3' },
      ],
      left: [
        { name: 'left one is left one ', id: 'l1' },
        { name: 'show the left two', id: 'l2' },
        { name: 'you get left three', id: 'l3' },
      ],
    };
  }

  changeListTest = data => {
    this.setState({
      right: data.right,
      left: data.left,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CodeAddr addr="Transfer/TransferDrag.jsx"/>

          <Transferdrag
          left={this.state.left}
          right={this.state.right}
          onChange={this.changeListTest.bind(this)}
          classes={{
            root: classes.root,
          }}
        />
      </div>
    );
  }
}
export default withStyles(styles)(App);
