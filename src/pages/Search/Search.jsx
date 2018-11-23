import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Search from 'plugins/Search';
import Icon from '@material-ui/core/Icon';
import IconButton from 'plugins/IconButton';
import CodeAddr from '@components/CodeAddr/CodeAddr.jsx';


const style = theme => {
  return {
    conttolledSearch: {
      marginBottom: theme.spacing.unit*3
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: 'test word',
      text: '',
    };
  }
  onChange = data => {
    console.log(data);
  };
  clearValue() {
    this.setState({ values: '' });
    console.log('clean values');
  }
  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    const { clearValue } = this;
    const { values, text } = this.state;
    return (
      <div style={{ width: '100%' }}>
         <CodeAddr addr="Search/Search.jsx"/>
        {/* Controlled Search*/}
        <div className={classes.conttolledSearch} style={{ overflow: 'hidden' }}>
          <div style={{ width: '50%', float: 'right' }}>
            <Search
              value={text}
              floatRight
              placeholder={'全局搜索'}
              onChange={this.handleChange}
              isDark
            />
            {/**/}
          </div>
          <div>search text is : {text}</div>
        </div>
        <br />
        <div style={{ overflow: 'hidden' }}>
          <div style={{ width: '50%', float: 'right' }}>
            <Search floatRight placeholder={'全局搜索'} onChange={this.onChange} isDark />
            {/**/}
          </div>
        </div>
        <br />
        <div style={{ overflow: 'hidden', background: '#2196f3', padding: '2em' }}>
          <div style={{ width: '50%', float: 'left' }}>
            <Search placeholder={'全局搜索'} defaultValue={values} onChange={this.onChange} />
          </div>
          <IconButton color="secondary" onClick={clearValue.bind(this)}>
            <Icon>delete</Icon>
          </IconButton>
        </div>
      </div>
    );
  }
}
export default withStyles(style)(App);
