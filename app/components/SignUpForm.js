import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';
import { Modal } from 'semantic-ui-react'; 

import AlertModal from './AlertModal';


axios.defaults.baseURL = 'http://localhost:3000';


class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            surname: '',
            hasAgreed: false,
            displayErrors: false,
            mailError: false,
            errorMessage: '',
            errorVisibility: false,
            open: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.checkMail = this.checkMail.bind(this);
        this.firstLetterUpperCase = this.firstLetterUpperCase.bind(this);
        this.mailEr = React.createRef();
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
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    checkPassword(e) {
      if(e.target.checkValidity()){
        this.setState({displayErrors: false})
        return
      }else {
        this.setState({displayErrors: true})
      }
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
          this.setState({displayErrors: true})
          return;
        }
      axios.post('/proriders/signup', {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.password
      })
        .then((res) => {
          console.log(res);
          if(this.state.errorVisibility) {
            this.setState( {errorVisibility: false} )
          }
        })
        .catch((err) => {
          if (err.response) {
            if(err.response.status === 500) {
              this.setState({ errorMessage: 'Неполадки с сервером, попробуйте перезагрузить страницу' });
              this.setState({ open: true} );
            }else if(err.response.status === 409 ) {
              this.setState({ errorMessage: 'Данный почтовый адрес уже зарегистрирован' });
              this.setState({ errorVisibility: true })
            }
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            this.setState({ errorMessage: 'Неполадки с сервером, попробуйте перезагрузить страницу' });
            this.setState({ open: true} );

            //console.log(err.request);
          } else {
            this.setState({ errorMessage: 'Что то пошло не так, попробуйте перезагрузить страницу или сообщите об ошибке администратору' });
            this.setState({ open: true} );

            console.log('Error', err.message);
          }
          console.log(err.config);
        });
      }

      firstLetterUpperCase(e) {
        if (e.target.value.length > 0) {
        let name = e.target.name;
        let wordArray = e.target.value.split("");
        let firstLetter = wordArray[0].toUpperCase();
        wordArray.splice(0,1);
        wordArray.unshift(firstLetter);
        let upperArray = wordArray.join("");
        e.target.value = upperArray;
  
        this.setState({
          [name]: upperArray
        });
        }
      }

      
    
    render() {
   
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Имя</label>
                <input type="text" 
                       id="name" 
                       className="FormField__Input" 
                       placeholder="Введите ваше имя" 
                       name="name" 
                       value={this.state.name} 
                       onChange={this.handleChange} 
                       onBlur={this.firstLetterUpperCase}
                       required />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Фамилия</label>
                <input type="text" 
                       id="surname" 
                       className="FormField__Input" 
                       placeholder="Введите вашу фамилию" 
                       name="surname" 
                       value={this.state.surname} 
                       onChange={this.handleChange} 
                       onBlur={this.firstLetterUpperCase}
                       required />
              </div>
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
              <div className="FormField fieldWithError">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" 
                       id="password" 
                       className="FormField__Input" 
                       placeholder="Enter your password" 
                       name="password" 
                       value={this.state.password} 
                       onChange={this.handleChange}
                       onBlur={this.checkPassword}
                       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                       required />
                       <p className={this.state.displayErrors ? ' error' : ''}>*Пароль должен содержать минимум 8 символов,одну строчную букву, одну заглавную букву и одну цифру.</p>
              </div>
              
              <p ref={this.loginEr}
                className="error-login-signup error"
                style={this.state.errorVisibility ? { display: 'block' } : { display: 'none' }}>
                *{this.state.errorMessage}
              </p>

              <div className="FormField">
              <Button className="FormField__Button mr-20">Sign Up <i class="material-icons right">send</i></Button> 
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

export default SignUpForm;
