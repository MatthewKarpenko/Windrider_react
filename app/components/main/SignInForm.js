import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'react-materialize';
import axios from 'axios';
import { Modal } from 'semantic-ui-react'; 

axios.defaults.baseURL = 'http://localhost:3000';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            errorVisibility: false,
            open: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginEr = React.createRef();
        this.show = size => () => this.setState({
          size,
          open: true
        })
        this.close = () => this.setState({
          open: false
        })
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
     
        this.setState({
          [name]: value
        });
    }


    handleSubmit(e) {
      e.preventDefault();
      if (!event.target.checkValidity()) {
        //some code after backend will be ready
        return;
      }
      axios.post('/proriders/login', {
        email: this.state.email,
        password: this.state.password
      })
        .then((res) => {
          console.log(res);
          if(this.state.errorVisibility) {
            this.setState({ errorVisibility: false });
          }
        })
        .catch((err) => {
          if (err.response) {

            if (err.response.status === 401) {
              this.setState({errorMessage: 'Неверная почта или пароль'})
              this.setState({errorVisibility: true})
            }
            // console.log(err.response.data);
            // console.log(err.response.status);
            // console.log(err.response.headers);
          } else if (err.request) {
            this.setState({ errorMessage: 'Неполадки с сервером, попробуйте перезагрузить страницу' });
              this.setState({ open: true} );
            //console.log(err.request);
          } else {
             this.setState({ errorMessage: 'Что то пошло не так, попробуйте перезагрузить страницу или сообщите об ошибке администратору' });
            this.setState({ open: true} );
            console.log('Error', err.message);
          }
          //console.log(err.config);
        });
      
     
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
                       required />
                      
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <p ref={this.loginEr} 
              className="error-login-signup error" 
              style={this.state.errorVisibility ? { display: 'block' } : { display: 'none' }}>
                  *{this.state.errorMessage}
              </p>

              <div className="FormField">
                  {/* <Button className="FormField__Button mr-20">Sign In <i class="material-icons right">send</i></Button>  */}
              </div>
            </form>
          <Modal size={'tiny'} open={this.state.open} onClose={this.close} style={{margin: 'auto'}} closeIcon>
              <Modal.Header className='alert-color'>Упс, ошибочка </Modal.Header>
              <Modal.Content style={{color: 'black'}}>
              <p style={{color: 'black'}}>{this.state.errorMessage}</p>
              </Modal.Content>
          </Modal>
          </div>
        );
    }
}

export default SignInForm;
