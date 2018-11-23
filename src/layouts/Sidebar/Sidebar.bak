import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { withStyles} from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";

import SidebarStyle from "./SidebarStyle.jsx"

const Links = ({...props}) => {
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  const { routes, classes } = props;
  return (
    <List>
    {routes.map((prop, key) => {
      if (prop.redirect) return null;
      const listItemClasses = classNames({
        [" " + classes.active]: activeRoute(prop.path)
      });
      const whiteFontClasses = classNames({
        [" " + classes.whiteFont]: activeRoute(prop.path)
      });
      return (

        <NavLink
          to={prop.path}
          className={classes.item}
          activeClassName="active"
          key={key}
          title={prop.sidebarName}
        >
          <ListItem button key={key} className={classNames(classes.itemLink + listItemClasses)}>

              <ListItemIcon className={classNames(classes.itemIcon + whiteFontClasses)}>
                <prop.icon />
              </ListItemIcon>

            <ListItemText primary={prop.sidebarName} className={classNames(classes.itemText + whiteFontClasses)} disableTypography={true}/>
          </ListItem>
        </NavLink>
      )
    })
    };
    </List>
  )
}

const Sidebar = ({ ...props }) => {
  const { classes, open, routes, logoText, logo, ...rest } = props;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
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
      <Links open={open} routes={routes} classes={classes} {...rest}/>
    </Drawer>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(SidebarStyle)(Sidebar);
