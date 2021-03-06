import * as React from 'react';
import { Item } from 'rc-menu';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({});

class NavItem extends React.Component {
  static contextTypes = {
    inlineCollapsed: PropTypes.bool,
  };

  static isMenuItem = true;

  static menuItem;

  onKeyDown = e => {
    this.menuItem.onKeyDown(e);
  };

  saveMenuItem = menuItem => {
    this.menuItem = menuItem;
  };

  render() {
    const { inlineCollapsed } = this.context;
    const { classes, ...props } = this.props;
    const item = <Item {...props} ref={this.saveMenuItem} />;
    if (inlineCollapsed && props.level === 1) {
      return (
        <Tooltip
          title={props.children}
          placement="right"
          className={`${props.rootPrefixCls}-inline-collapsed-tooltip`}
        >
          {item}
        </Tooltip>
      );
    }
    return item;
  }
}

NavItem.propTypes = {
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * item 的唯一标志
   */
  key: PropTypes.string,
};

NavItem.defaultProps = {
  disabled: false,
};

NavItem.isMenuItem = true;

export default withStyles(styles, { name: 'RMNavItem' })(NavItem);
