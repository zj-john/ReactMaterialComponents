import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from 'plugins/Radio';
import RadioGroup from 'plugins/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from 'plugins/Select';
import InputLabel from 'plugins/InputLabel';
import Filters from 'plugins/Filters';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
import Usage from "../../components/Usage/Usage";

const style = theme => ({
  mt: {
    marginTop: theme.spacing.unit * 3,
  },
});

function createData(label, value) {
  return {
    label,
    value,
  };
}

class FiltersDemo extends Component {
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
    multiple: '0',
    color: 'primary',
    value: ['1'],
    mapper: {
      label: 'label',
      value: 'value',
    },
    spacing: 8,
  };

  onChange = value => {
    this.setState({
      value,
    });
  };

  handleChange = type => event => {
    const { value } = event.target;
    this.setState({
      [type]: value,
    });
  };

  selectChange = event => {
    this.setState({
      spacing: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { label, multiple, options, value, color, spacing, mapper } = this.state;
    const selected = JSON.stringify(value);
    return (
      <div>
        <Usage>
                {
`//first: installation
npm install deepmerge --save
npm install formsy-react --save
npm install recompose --save
npm install lodash --save
//second: 点击代码地址,查看demo示例
`}
        </Usage>
        <CodeAddr addr="Filters/Basic.jsx"/>
        <FormControl>
          <InputLabel htmlFor="spacing">spacing</InputLabel>
          <Select
            value={spacing}
            onChange={this.selectChange}
            inputProps={{
              name: 'spacing',
              id: 'spacing',
            }}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={24}>24</MenuItem>
          </Select>
        </FormControl>
        <RadioGroup row value={multiple} onChange={this.handleChange('multiple')}>
          <FormControlLabel value={'0'} control={<Radio />} label="单选" />
          <FormControlLabel value={'1'} control={<Radio />} label="多选" />
        </RadioGroup>
        <RadioGroup row value={color} onChange={this.handleChange('color')}>
          <FormControlLabel value={'default'} control={<Radio />} label="default" />
          <FormControlLabel value={'primary'} control={<Radio />} label="primary" />
          <FormControlLabel value={'secondary'} control={<Radio />} label="secondary" />
        </RadioGroup>
        <div className={classes.mt}>
          <Filters
            type={'dark'}
            label={label}
            multiple={multiple == '1'}
            options={options}
            spacing={spacing}
            value={value}
            onChange={this.onChange}
            color={color}
            mapper={mapper}
          />
        </div>
        <div className={classes.mt} style={{ background: '#3fa4f6' }}>
          <Filters
            label={label}
            multiple={multiple == '1'}
            options={options}
            spacing={spacing}
            value={value}
            onChange={this.onChange}
            color={color}
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

FiltersDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

FiltersDemo.defaultProps = {};

export default withStyles(style)(FiltersDemo);
