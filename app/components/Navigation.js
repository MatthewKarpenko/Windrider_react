import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import LoginRegistration from './LoginRegistration';
import WholePersonalPage from './personalPage';
import Lightbox from './personalPage/gallery/lightbox/index'
import MainPage from './MainPage';


class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/LogInOrRegistration' component={LoginRegistration} />
                    <Route path='/personalPage' component={WholePersonalPage} />
                    <Route path='/personalGallery' component= {Lightbox} />
                    <Route exact path='/' component={MainPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default Navigation