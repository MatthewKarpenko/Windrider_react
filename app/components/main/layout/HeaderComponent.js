import React from "react";
import {SideNav, SideNavItem} from "react-materialize";

const sideBarTrigger = (
    <a className="toc item sidenav-trigger" style={{color: 'gray'}}>
        {" "}
        <i className="sidebar icon"/>
    </a>
);

class HeaderComponent extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
        M.AutoInit();
    };

    render() {
        return (
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
            </div>
        );
    }
}

export default HeaderComponent;