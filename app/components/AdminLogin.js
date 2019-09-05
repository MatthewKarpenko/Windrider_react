import React from 'react';

class AdminLogin extends React.Component {

    constructor () {
        super();

        this.sendEmail = () => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3000/admin/login');
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(`email=${this.email.current.value}&&password=${this.password.current.value}`);
        };

        this.email = React.createRef();
        this.password = React.createRef();
    }



    render() {

        return (
            <div>
                <input type="text" ref={this.email}/>
                <input type="password" ref={this.password}/>
                <button onClick={this.sendEmail}>send email</button>
            </div>
        )
    }
}

export default AdminLogin