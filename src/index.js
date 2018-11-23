import React from "react";
import ReactDOM from "react-dom";
import {createHashHistory, createBrowserHistory } from "history";
import {Router, Route, Switch} from "react-router-dom";
import "@assets/css/global.css";
import indexRoutes from "routes/index.jsx";
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from "layouts/Theme/Theme.jsx";
// userInfo
import {UserContext} from 'UserContext.js';

import Api from '@services/Api.js';
const ApiService = new Api();
//由于Server端未适配，修改为了hash history
const hist = createHashHistory();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        let global = this;
        ApiService.getUser().then((res) => {
            let data = res.data;
            global.setState({user: data})
        }).catch((error) => {});
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                <Router history={hist}>
                    <Switch>
                        {indexRoutes.map((prop, key) => {
                            return <Route path={prop.path} component={prop.component} key={key}/>;
                        })}
                    </Switch>
                </Router>
            </UserContext.Provider>
        );
    }
}

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <App/>
</MuiThemeProvider>, document.getElementById("root"));
