import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import HeaderComponent from './layout/HeaderComponent';
import FooterComponent from './layout/FooterComponent';

import LoginRegistration from './LoginRegistration';
import WholePersonalPage from './personalPage';
import MainPage from './MainPage';


class Main extends React.Component {
    render() {
        return (
            <div id="layout">
                <HeaderComponent/>
                <BrowserRouter>
                    <Switch>
                        <Route path='/LogInOrRegistration' component={LoginRegistration} />
                        <Route path='/personalPage' component={WholePersonalPage} />
                        <Route exact path='/' component={MainPage} />
                    </Switch>
                </BrowserRouter>
                <FooterComponent/>
            </div>
        );
    }
}


export default Main