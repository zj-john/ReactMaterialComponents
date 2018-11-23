import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from 'plugins/MenuBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import data from './data';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx'
import Usage from 'components/Usage/Usage'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class MenuBarDemo extends React.Component {
  state = {
    theme: 'dark',
  };
  handleChange = (event, checked) => {
    this.setState({ theme: checked ? 'dark' : 'light' });
  };

  render() {
    const { classes } = this.props;
    const { theme } = this.state;

    return (
      <div>
      <CodeAddr addr="MenuBar/MenuBar.jsx"/>
        <Usage>
            {
`//first: installation
npm install rc-menu--save
//second: 点击代码地址,查看demo示例
`}
        </Usage>
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme === 'dark' ? true : false}
                onChange={this.handleChange}
                aria-label="ThemeSwitch"
              />
            }
            label={theme === 'dark' ? 'Dark' : 'Light'}
          />
        </FormGroup>
        <MenuBar
          list={data}
          itemKeysMap={{
            name: 'component',
            children: 'childRoutes',
            key: 'path',
          }}
          onClick={this.onClick}
          theme={theme}
        />
      </div>
      </div>
    );
  }
}

MenuBarDemo.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuBarDemo);
