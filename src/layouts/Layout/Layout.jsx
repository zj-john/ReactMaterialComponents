import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from "react-router-dom";

import Routes from "routes/Routes.jsx";
import Footer from "layouts/Footer/Footer.jsx";
import Header from "layouts/Header/Header.jsx";
import Sidebar from "layouts/Sidebar/Sidebar.jsx";

import LayoutStyle from "./LayoutStyle.jsx"
import logo from "assets/img/reactlogo.png";

const switchRoutes = (
  <Switch>
    {Routes.map((prop, key) => {
      if (prop.redirect) {
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      }
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);


class Layout extends React.Component {
  state = {
    open: true,
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <Header
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.open}
          {...rest}
        />

        <Sidebar
          routes={Routes}
          logoText={"ReactMaterial"}
          logo={logo}
          open={this.state.open}
          {...rest}
        />
        <main className={classes.content}>
          <div className={classes.container}>{switchRoutes}</div>
          <Footer />
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(LayoutStyle)(Layout);
