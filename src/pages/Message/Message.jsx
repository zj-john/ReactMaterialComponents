import React, { Component } from 'react';
import Message from 'plugins/Message';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from 'plugins/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from 'plugins/Radio';
import RadioGroup from 'plugins/RadioGroup';
import Grid from 'plugins/Grid';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
import Usage from 'components/Usage/Usage'
const styles = theme => ({
  box: {
    marginBottom: theme.spacing.unit * 6,
  },
  message: {
    backgroundColor: "white"
  }
});

class MessageTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorOrigin: { vertical: 'top', horizontal: 'center' },
      animation: 'fade',
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChangevertical = (event, value) => {
    console.log(value);
    this.setState({
      anchorOrigin: {
        ...this.state.anchorOrigin,
        vertical: value,
      },
    });
  };
  handleChangehorizontal = (event, value) => {
    console.log(value);
    this.setState({
      anchorOrigin: {
        ...this.state.anchorOrigin,
        horizontal: value,
      },
    });
  };
  handleChangeanimation = (event, value) => {
    console.log(value);
    this.setState({
      animation: value,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
      <CodeAddr addr="Message/Message.jsx"/>
        <Usage>
            {`
//first: installation
npm install deepmerge --save (button 依賴)
npm install formsy-react --save (radioGroup 依賴)
npm install recompose--save (radioGroup 依賴)
//second: 点击代码地址,查看demo示例
            `}
        </Usage>
      <div className={classes.box}>
        <Button onClick={this.handleOpen}>Open Message</Button>
        <Message
          open={this.state.open}
          onClose={this.handleClose}
          anchorOrigin={this.state.anchorOrigin}
          animation={this.state.animation}
          classes={{
            root: classes.message,
          }}
        >
          <div>it is a test</div>
        </Message>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">horizontal</FormLabel>
              <RadioGroup
                aria-label="horizontal"
                name="horizontal"
                value={this.state.anchorOrigin.horizontal}
                onChange={this.handleChangehorizontal}
              >
                <FormControlLabel value="right" control={<Radio />} label="right" />
                <FormControlLabel value="center" control={<Radio />} label="Center" />
                <FormControlLabel value="left" control={<Radio />} label="left" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">vertical</FormLabel>
              <RadioGroup
                aria-label="vertical"
                name="vertical"
                value={this.state.anchorOrigin.vertical}
                onChange={this.handleChangevertical}
              >
                <FormControlLabel value="top" control={<Radio />} label="Top" />
                <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">open animation</FormLabel>
              <RadioGroup
                row
                aria-label="animation"
                name="animation"
                value={this.state.animation}
                onChange={this.handleChangeanimation}
              >
                <FormControlLabel value="slide" control={<Radio />} label="slide" />
                <FormControlLabel value="collapse" control={<Radio />} label="collapse" />
                <FormControlLabel value="fade" control={<Radio />} label="fade" />
                <FormControlLabel value="grow" control={<Radio />} label="grow" />
                <FormControlLabel value="zoom" control={<Radio />} label="zoom" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(MessageTest);
