import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { withStyles} from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Grid } from "@material-ui/core";

import IconButton from 'plugins/IconButton';
import Scrollbar from 'plugins/Scrollbar';
import NavBar from 'plugins/NavBar';
import SidebarStyle from "./SidebarStyle.jsx"

import {defaultRoute} from 'routes/Routes.jsx';


class Sidebar extends React.Component {
  onClick(e) {
    const path = "/#"+ e.key;
    window.location.href = path;
  }
  render() {
    const { classes, open, routes, logoText, logo,  ...rest } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
          docked: classes.docked,
        }}
        open={open}
      >
        <Grid
          container
          direction="column"
          alignItems="stretch"
          justify="space-between"
          spacing="0"
          style={{
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.87)',
          }}
        >
          <div className={classes.toolbar}>
            <a href="/" className={classes.logoLink}>
              <div className={classNames(classes.logoImage, !open && classes.logoImageClose)}>
                <img src={logo} alt="logo" className={classes.img} />
              </div>
              <span className={classNames(classes.logoText, !open && classes.logoTextClose)}>
                {logoText}
              </span>
            </a>
          </div>
          <Divider className={classes.divider}/>

          <Grid item xs style={{ position: 'relative' }}>
            <Scrollbar style={{ position: 'absolute', height: '100%', width: '100%' }}>
              <NavBar
                list={defaultRoute}
                itemKeysMap={{
                  name: 'component',
                  children: 'childRoutes',
                  key: 'path',
                }}
                onClick={this.onClick}
                mode="inline"
                inlineCollapsed={!open}
                theme={'dark'}
              />
            </Scrollbar>
          </Grid>
        </Grid>
      </Drawer>

    );
  }
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(SidebarStyle)(Sidebar);
