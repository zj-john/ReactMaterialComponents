import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Filters from 'plugins/Filters';
import { emphasize, fade, darken } from '@material-ui/core/styles/colorManipulator';
import CodeAddr from '@components/CodeAddr/CodeAddr.jsx';

const style = theme => ({
  mt: {
    marginTop: theme.spacing.unit * 3,
  },
  item: {
    borderRadius: '0px',
  },
  clickable: {
    '&:hover, &:focus': {
      backgroundColor: '#ff5722',
    },
    '&:active': {
      backgroundColor: '#ff784e',
    },
  },
  colorPrimary: {
    backgroundColor: '#b23c17 !important',
    '&:hover, &:focus': {
      backgroundColor: emphasize('#b23c17', 0.08) + ' !important',
    },
    '&:active': {
      backgroundColor: emphasize('#b23c17', 0.12) + ' !important',
    },
  },
});

function createData(label, value) {
  return {
    label,
    value,
  };
}

class CustomFiltersDemo extends Component {
  state = {
    options: [
      createData('红色', '1'),
      createData('橙色', '2'),
      createData('黄色', '3'),
      createData('绿色', '4'),
      createData('蓝色', '5'),
      createData('粉色', '6'),
      createData('紫色', '7'),
    ],
    label: '颜色选择：',
    multiple: true,
    value: ['1'],
    mapper: {
      label: 'label',
      value: 'value',
    },
    color: 'primary',
  };

  onChange = value => {
    this.setState({
      value,
    });
  };

  render() {
    const { classes } = this.props;
    const { label, multiple, options, value, mapper, color } = this.state;
    const selected = JSON.stringify(value);
    return (
      <div>
        <CodeAddr addr="Filters/CustomFilters.jsx"/>
        <div className={classes.mt}>
          <Filters
            color={color}
            label={label}
            multiple={multiple}
            options={options}
            value={value}
            onChange={this.onChange}
            classes={{
              item: classes.item,
              clickable: classes.clickable,
              color: classes.colorPrimary,
            }}
            mapper={mapper}
          />
        </div>
        <div className={classes.mt}>
          selected values:
          {selected}
        </div>
      </div>
    );
  }
}

CustomFiltersDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

CustomFiltersDemo.defaultProps = {};

export default withStyles(style)(CustomFiltersDemo);
