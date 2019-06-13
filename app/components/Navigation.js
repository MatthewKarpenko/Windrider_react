import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import LoginRegistration from './LoginRegistration'


class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/LogInOrRegistration" component ={LoginRegistration} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default Navigation