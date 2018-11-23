import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import {withStyles} from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton
} from "@material-ui/core";
import {Menu as MenuIcon} from '@material-ui/icons';

import HeaderStyle from "./HeaderStyle.jsx";
import HeaderLinks from "./HeaderLinks.jsx";

function Header({
    ...props
}) {
    const {classes} = props;
    return (
        <AppBar position="absolute" className={classNames(classes.appBar, props.open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton color="inherit" aria-label="Open drawer" onClick={props.handleDrawerToggle} className={classNames(classes.menuButton, !props.open && classes.collapse)}>
                    <MenuIcon/>
                </IconButton>
                <HeaderLinks/>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(HeaderStyle)(Header);
