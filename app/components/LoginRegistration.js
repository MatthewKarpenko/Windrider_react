import React from 'react';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom';
import Registration from './Registration';
import SignUp from './SignUp';


class LoginRegistration extends React.Component {
    render(){
        return(
            <Router>
                <div className="LogOrRegistration">
                <NavLink  activeClassName="activeForm" to='/signIn'>Войти</NavLink>
                <NavLink  activeClassName="activeForm" to='/Registration'>Регистрация</NavLink>
                </div>
                <Route path="/signIn" component={SignUp} />
                <Route path="/Registration" component ={Registration} />
           </Router>
        )
    }
}

export default LoginRegistration