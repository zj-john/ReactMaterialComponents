import React, { Component } from 'react';
import Mention from 'plugins/Mention';
import {withStyles} from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemText from '@material-ui/core/ListItemText';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});
const people = [
  'Aaron',
  'Ada',
  'Barbara',
  'Belinda',
  'Carey',
  'Cara',
  'Davina',
  'Daphne',
  'Fannie',
  'Madge',
  'Olivia',
  'Taylor',
];

class IconMentionTest extends Component {
  constructor() {
    super();
    this.state = {
      pageConfig: {
        page: 0,
        rowsPerPage: 4,
        count: 12,
      },
      selectedItem: [],
      dataSource: [],
      inputValue: '',
    };
  }

  inputChangeCb(filterOption, triggerOption) {
    let filteredData = people.filter(item => {
      return !filterOption || item.toLowerCase().indexOf(filterOption.toLowerCase()) !== -1;
    });
    this.setState({
      dataSource: filteredData,
      pageConfig: {
        ...this.state.pageConfig,
        count: filteredData.length,
      },
    });
  }
  onChange(value) {
    this.setState({
      inputValue: value,
    });
  }
  onSelect(items) {
    this.setState({
      selectedItem: items,
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Mention
          placeholder={'input @ to Mention'}
          defaultValue={this.state.inputValue}
          selected={this.state.selectedItem}
          pageConfig={this.state.pageConfig}
          onSearchChange={this.inputChangeCb.bind(this)}
          onChange={this.onChange.bind(this)}
          onSelect={this.onSelect.bind(this)}
        >
          {this.state.dataSource.map(item => (
            <MenuItem key={item} value={item}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Mention>
      </div>
    );
  }
}
export default withStyles(styles)(IconMentionTest);
