import React from 'react';
import Auth from '../../helpers/Auth';

class Admin extends React.Component {

    constructor() {
        super();

        this.input = React.createRef();

        this.state = {
            invites: []
        };
    }

    sendEmail() {
        fetch('https://windrider-server.herokuapp.com/api/admin/send-invite', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'access_token': Auth.token
            },
            body: JSON.stringify({ email: this.input.current.value })
        })
            .then(response => {
                response.json()
                    .then(data => {
                        console.log(data);
                        if (data.success) {
                            this.setState(this.state);
                        } else {
                            Auth.logOut();
                            this.props.history.push('/admin-login');
                        }
                    });
            });
    }

    getInvites() {
        fetch('https://windrider-server.herokuapp.com/api/admin/get-invites', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'access_token': Auth.token
            }
        })
            .then(response => {
                response.json()
                    .then(data => {
                        console.log(data);
                        if (data.success) {
                            this.setState({invites: data.data});
                        } else {
                            Auth.logOut();
                            this.props.history.push('/admin-login');
                        }
                    });
            });
    }

    componentDidMount() {
        this.getInvites();
    }

    render() {
        return (
            <div className="admin-page">
                <div className="row">
                    <div className="col s3">
                        <h1>Menu</h1>
                        <h2>--not implemented--</h2>
                    </div>
                    <div className="col s9">
                        <div>
                            <ul className="collection with-header">
                                <li className="collection-header"><h4>Invites</h4></li>
                                <li className="collection-item">
                                    <table className="highlight">
                                        <thead>
                                            <tr>
                                                <th>Email</th>
                                                <th>Registered</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.invites.map((item, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{item.email}</td>
                                                        <td>{item.registered.toString()}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </div>

                        <div className="card-panel teal">
                            <input type="text" ref={this.input} />
                            <button onClick={this.sendEmail.bind(this)} className="btn waves-effect waves-light">
                                Send email
                            <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin