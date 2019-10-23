import React from 'react';

class Admin extends React.Component {

    constructor () {
        super();

        this.sendEmail = () => {
            fetch('http://localhost:3000/api/admin', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({email: this.input.current.value})
            })
                .then(response => {
                    JSON.parse(response);
                    console.log(response);
            });
        };

        this.input = React.createRef();
    }



    render() {

        return (
            <div className="row">
                <div className="col s3">
                </div>
                <div className="col s9">
                    <div>
                        <input type="text" ref={this.input}/>
                        <button onClick={this.sendEmail}>send email</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin