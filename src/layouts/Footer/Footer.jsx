import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import FooterStyle from "./FooterStyle.jsx"

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            zj_john@qq.com
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(FooterStyle)(Footer);
