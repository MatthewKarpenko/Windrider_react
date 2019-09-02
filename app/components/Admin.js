import React from 'react';

class Admin extends React.Component {

    constructor () {
        super();

        this.sendEmail = () => {
            let xhr = new XMLHttpRequest();
            console.log(this.input.current);
            console.log(this.input.current.value);
            xhr.open('POST', 'http://localhost:3000/admin');
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(`email=${this.input.current.value}`);
        };

        this.input = React.createRef();
    }



    render() {

        return (
            <div>
                <input type="text" ref={this.input}/>
                <button onClick={this.sendEmail}>send email</button>
            </div>
        )
    }
}

export default Admin