import React, {Component} from "react";
import {HashRouter} from "react-router-dom";
import {Route, BrowserRouter as Router} from 'react-router-dom';

import "./app.scss";
import Main from "./components/main/Main.js";

import Admin from "./components/admin/Admin.js";
import {ProtectedRoute} from "./components/admin/ProtectedRoute.js";
import AdminLogin from "./components/admin/AdminLogin";

class App extends Component {
    componentDidMount() {
        M.AutoInit();
    };

    render() {
        return (
            <Router>
                <HashRouter>
                    <Route exact path="/" component={Main}/>
                    <ProtectedRoute path="/admin" component={Admin}/>
                    <Route path="/admin-login" component={AdminLogin}/>
                </HashRouter>
            </Router>
        );
    }
}

export default App;
