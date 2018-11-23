import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import LocaleProvider, {
  LocaleConsumer,
  withLocale,
} from 'plugins/LocaleProvider';
import { withStyles } from '@material-ui/core/styles';
import Radio, { RadioButton } from 'plugins/Radio';
import RadioGroup from 'plugins/RadioGroup';
import Grid from '@material-ui/core/Grid';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';

const styles = theme => ({
  box: {
    display: 'flex',
    width: 500,
  },
});

const styles1 = theme => ({
  box: {
    width: 500,
    marginBottom: theme.spacing.unit,
  },
});
class ButtonTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'en',
    };
  }
  handleChange = event => {
    const { changeLocale } = this.props;
    let value = event.target.value;
    console.log('changeLocale', changeLocale);
    changeLocale && changeLocale(value)();
    this.setState({
      value: value,
    });
  };

  render() {
    const { label, classes } = this.props;
    return (
      <Grid className={classes.box} container spacing={16}>
        <Grid item xs="5">
          {label}：
        </Grid>
        <Grid item xs="5">
          <RadioGroup
            row
            size="small"
            onChange={this.handleChange}
            value={this.state.value}
            name="gender1"
          >
            <RadioButton value="en">en</RadioButton>
            <RadioButton value="zh">中文</RadioButton>
          </RadioGroup>
        </Grid>
      </Grid>
    );
  }
}
ButtonTest = withStyles(styles1)(ButtonTest);
const LocaleButton = withLocale({
  name: 'ButtonTest',
})(ButtonTest);
class LocaleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  value = {
    zh: {
      ButtonTest: {
        label: '选择一个',
      },
    },
    en: {
      ButtonTest: {
        label: 'choose one',
      },
    },
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
      <CodeAddr addr="LocaleProvider/WithLocale.jsx"/>
      <LocaleProvider locale={'en'} value={this.value}>
        <div className={classes.box}>
          {/* by withLocale */}
          <LocaleButton />
          <Divider />
          <div>
            {/* by  LocaleConsumer*/}
            <LocaleConsumer>
              {value => {
                const { locale } = value;
                return <div>{value.ButtonTest.text}</div>;
              }}
            </LocaleConsumer>
          </div>
        </div>
      </LocaleProvider>
      </div>
    );
  }
}

export default withStyles()(LocaleExample);
