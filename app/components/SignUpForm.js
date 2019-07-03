import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

const axios = require('axios'); 

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
            mailError: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.checkMail = this.checkMail.bind(this)
        this.firstLetterUpperCase = this.firstLetterUpperCase.bind(this);
        this.mailEr = React.createRef()
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
        console.log("done")
        //  const data = new FormData(event.target);
    
        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
      }

      firstLetterUpperCase(e) {
        if (e.target.value.length > 0) {
        let name = e.target.name;
        let wordArray = e.target.value.split("")
        let firstLetter = wordArray[0].toUpperCase()
        wordArray.splice(0,1)
        wordArray.unshift(firstLetter)
        let upperArray = wordArray.join("")
        e.target.value = upperArray
  
        this.setState({
          [name]: upperArray
        });
        }
      }
    
    componentDidMount() {
    
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
              

              <div className="FormField">
              <Button className="FormField__Button mr-20">Sign Up <i class="material-icons right">send</i></Button> 
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
