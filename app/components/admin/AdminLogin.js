import React from 'react';
import Auth from '../../helpers/Auth';

class AdminLogin extends React.Component {

    constructor() {
        super();

        this.sendEmail = () => {
            Auth.login(this.email.current.value, this.password.current.value, () => {
                this.props.history.push('/admin');
            });
        };

        this.email = React.createRef();
        this.password = React.createRef();
    }

    componentDidMount() {
        if (Auth.isAuthenticated()) {
            this.props.history.push('/admin');
        }
    };

    render() {

        return (
            <div id="admin-login">
                <div className="row">
                    <div className="form col s6 m6 l6 xl6 offset-s3 offset-m3 offset-l3 offset-xl3">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" ref={this.email}/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" ref={this.password}/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <button className="btn" onClick={this.sendEmail}>Login</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default AdminLogin