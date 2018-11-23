import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {
    MenuItem,
    Button,
    Input,
    FormControl,
    Typography,
    InputAdornment,
    IconButton,
    MenuList,
    Grow,
    Paper,
    ClickAwayListener
} from "@material-ui/core";

import {Person, Notifications, Search} from "@material-ui/icons";
import {withUser} from 'UserContext.js';
import HeaderLinksStyle from "./HeaderLinksStyle";

class HeaderLinks extends React.Component {
    state = {
        open: false
    };
    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleClose = () => {
        this.setState({open: false});
    };
    render() {
        const {classes, LoginUser} = this.props;
        const {open} = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.left}>
                </div>
                <div className={classes.right}>
                    <Button aria-label="Person" className={classes.buttonWhite}>
                        <Person className={classes.icons}/>
                        <p className={classes.linkText}>{LoginUser.displayName}</p>
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(HeaderLinksStyle)(withUser(HeaderLinks));
