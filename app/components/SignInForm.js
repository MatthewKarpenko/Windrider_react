import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize'
class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkMail = this.checkMail.bind(this);
        this.mailEr = React.createRef();
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    checkMail(e) {
      if(e.target.checkValidity()){
        this.setState({mailError: false})
        this.mailEr.current.style.display="none"
        return
      }else {
        this.setState({mailError: true})
        this.mailEr.current.style.display="block"
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      if (!event.target.checkValidity()) {
        //some code after backend will be ready
        return;
      }
      console.log("done")
      //  const data = new FormData(event.target);
  
      // fetch('/api/form-submit-url', {
      //   method: 'POST',
      //   body: data,
      // });
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField fieldWithError">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" 
                       id="email" 
                       className="FormField__Input" 
                       placeholder="Enter your email" 
                       name="email" value={this.state.email} 
                       onChange={this.handleChange} 
                       onBlur={this.checkMail}
                       required />
                       <p ref={this.mailEr} className="mailError">*Некорректный адрес почты</p>
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <Button className="FormField__Button mr-20">Sign In <i class="material-icons right">send</i></Button> 
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
