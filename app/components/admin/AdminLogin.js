import React from 'react';
import Auth from '../../helpers/Auth';

class AdminLogin extends React.Component {

    constructor () {
        super();

        this.sendEmail = () => {
            Auth.login(this.email.current.value, this.password.current.value, () => {
                console.log('ewew');
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
            <div>
                <input type="text" ref={this.email}/>
                <input type="password" ref={this.password}/>
                <button onClick={this.sendEmail}>Login</button>
            </div>
        )
    };
}

export default AdminLogin