import React, {Component} from "react";
import {HashRouter} from "react-router-dom";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {SideNav, SideNavItem} from "react-materialize";

import "./app.scss";
import Navigation from "./components/Navigation.js";

import Admin from "./components/admin/Admin.js";
import {ProtectedRoute} from "./components/admin/ProtectedRoute.js";
import WindriderImg from "./images/head3.png";
import AdminLogin from "./components/admin/AdminLogin";
import AdminLogin from "./components/AdminLogin";


const sideBarTrigger = (
    <a className="toc item sidenav-trigger" style={{color: 'gray'}}>
        {" "}
        <i className="sidebar icon"/>
    </a>
);

class App extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <Router>
                <HashRouter>
                    <div className="pusher">
                        <div className="ui inverted vertical masthead segment">
                            <div className="ui container">
                                <div className="ui large secondary inverted pointing menu">
                                    <SideNav
                                        trigger={sideBarTrigger}
                                        options={{closeOnClick: true}}
                                        style={{fontFamily: 'Rubik, sans-serif'}}

                                    >
                                        <SideNavItem
                                            userView
                                            user={{
                                                background: "https://placeimg.com/640/480/tech",
                                                name: "Матвей Карпенко"
                                            }}
                                        />
                                        <SideNavItem icon="home">

                                        </SideNavItem>
                                        <SideNavItem divider/>
                                        <SideNavItem className="sidenav-link">Главная</SideNavItem>
                                        <SideNavItem>Школы</SideNavItem>
                                        <SideNavItem>О нас</SideNavItem>
                                        <SideNavItem>Контакты</SideNavItem>
                                    </SideNav>
                                    <a className="active item">Home</a>
                                    <a className="item">Work</a>
                                    <a className="item">Company</a>
                                    <a className="item">Careers</a>
                                </div>
                            </div>
                        </div>

                        <Route exact path="/" component={Navigation} />
                        <ProtectedRoute path="/admin" component={Admin} />
                        <Route path="/adminLogin" component={AdminLogin} />

                        <div className="ui inverted vertical footer segment">
                            <div className="ui container">
                                <div className="ui stackable inverted divided equal height stackable grid">
                                    <div className="three wide column">
                                        <h4 className="ui inverted header">About</h4>
                                        <div className="ui inverted link list">
                                            <a href="#" className="item">
                                                Sitemap
                                            </a>
                                            <a href="#" className="item">
                                                Contact Us
                                            </a>
                                            <a href="#" className="item">
                                                Religious Ceremonies
                                            </a>
                                            <a href="#" className="item">
                                                Gazebo Plans
                                            </a>
                                        </div>
                                    </div>
                                    <div className="three wide column">
                                        <h4 className="ui inverted header">Services</h4>
                                        <div className="ui inverted link list">
                                            <a href="#" className="item">
                                                Banana Pre-Order
                                            </a>
                                            <a href="#" className="item">
                                                DNA FAQ
                                            </a>
                                            <a href="#" className="item">
                                                How To Access
                                            </a>
                                            <a href="#" className="item">
                                                Favorite X-Men
                                            </a>
                                        </div>
                                    </div>
                                    <div className="seven wide column">
                                        <h4 className="ui inverted header">Footer Header</h4>
                                        <p>
                                            Extra space for a call to action inside the footer that
                                            could help re-engage users.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </HashRouter>
            </Router>
        );
    }
}

export default App;
