import React, { Component } from 'react';
import { Modal2, ModalManager } from 'plugins/Modal';
import Button from 'plugins/Button';
import { withStyles } from '@material-ui/core/styles';

import DialogContentText from '@material-ui/core/DialogContentText';


const styles = theme => ({
  box: {
    marginBottom: theme.spacing.unit * 6,
  },
  paperWidthSm: {
    minWidth: 1000,
  },
  actionRootBtn: {
    margin: `0 0 0 ${theme.spacing.unit}px`,
  },
  leftButton: {
    width: 200,
    marginRight: theme.spacing.unit * 3,
  },
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      animation: 'zoom',
      flag: false,
    };
  }

  handleChange = (event, value) => {
    this.setState({
      animation: value,
    });
  };

  handleOpen = flag => () => {
    this.setState({ open: true, flag });
  };

  handleClose = key => {
    this.setState({ open: false });
  };

  handleCancel() {
    this.setState({ open: false });
  }

  handleOK() {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    let { flag, open, animation, ...other } = this.state;

    let actions1 = [
      <Button
        onClick={this.handleCancel.bind(this)}
        color="primary"
        classes={{ root: classes.actionRootBtn }}
      >
        Quit
      </Button>,
      '-',
      <Button
        onClick={this.handleCancel.bind(this)}
        color="primary"
        classes={{ root: classes.actionRootBtn }}
      >
        Disagree
      </Button>,
      <Button
        onClick={this.handleOK.bind(this)}
        variant="raised"
        color="primary"
        autoFocus
        classes={{ root: classes.actionRootBtn }}
      >
        Agree
      </Button>,
    ];

    let actions2 = [
      <Button
        onClick={this.handleCancel.bind(this)}
        color="primary"
        classes={{ root: classes.actionRootBtn }}
      >
        Quit
      </Button>,
      <Button
        onClick={this.handleCancel.bind(this)}
        color="primary"
        classes={{ root: classes.actionRootBtn }}
      >
        Disagree
      </Button>,
      <Button
        onClick={this.handleOK.bind(this)}
        variant="raised"
        color="primary"
        autoFocus
        classes={{ root: classes.actionRootBtn }}
      >
        Agree
      </Button>,
    ];
    let actions = flag ? actions1 : actions2;
    return (
      <div>
        <Button
          className={classes.leftButton}
          onClick={this.handleOpen(true)}
          variant="raised"
          color="primary"
        >
          Modal actions has -
        </Button>
        <Button onClick={this.handleOpen(false)} variant="raised" color="primary">
          normal
        </Button>
        <Modal2
          classes={{
            paperWidthSm: classes.paperWidthSm,
          }}
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          label={'this is a Modal test'}
          animation={this.state.animation}
          actions={actions}
        >
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running. Let Google help apps determine location. This
            means sending anonymous location data to Google, even when no apps are running. Let
            Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running. Let Google help apps determine location. This
            means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </Modal2>
      </div>
    );
  }
}
export default withStyles(styles)(App);
