import React, { Component } from 'react';
import Button from 'plugins/Button';
import {withStyles} from "@material-ui/core/styles";
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import Confirm from "./Confirm";
import ModalActions from "./ModalActions";
import {Modal2} from "../../plugins/Modal/index";
import CodeAddr from "../../components/CodeAddr/CodeAddr";

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
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      animation: 'zoom',
    };
  }

  handleChange = (event, value) => {
    this.setState({
      animation: value,
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
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

    let actions = [
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

    return (
      <div>
         <CodeAddr addr="Modal/Modal.js"/>
        <Button onClick={this.handleOpen} variant="raised" color="primary">
          Open Modal
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

        <Grid container spacing={16}>
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset">
              {/* <FormLabel component="legend">open animation</FormLabel> */}
              <RadioGroup
                row
                aria-label="anchorOriginVertical"
                name="anchorOriginVertical"
                value={this.state.animation}
                onChange={this.handleChange}
              >
                <FormControlLabel value="slide" control={<Radio />} label="slide" />
                <FormControlLabel value="collapse" control={<Radio />} label="collapse" />
                <FormControlLabel value="fade" control={<Radio />} label="fade" />
                <FormControlLabel value="grow" control={<Radio />} label="grow" />
                <FormControlLabel value="zoom" control={<Radio />} label="zoom" />
              </RadioGroup>
              <h4>your choose animation is :{this.state.animation}</h4>
            </FormControl>
          </Grid>
        </Grid>


        <CodeAddr addr="Modal/ModalActions.js"/>
        <ModalActions />
        <CodeAddr addr="Modal/Confirm.js"/>
        <Confirm />

      </div>
    );
  }
}
export default withStyles(styles)(App);