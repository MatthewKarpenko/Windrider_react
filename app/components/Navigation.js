import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import LoginRegistration from './LoginRegistration';
import WholePersonalPage from './personalPage';


class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/LogInOrRegistration' component={LoginRegistration} />
                    <Route path='/personalPage' component={WholePersonalPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}


export default Navigation