import React from 'react'
import {Button,TextInput,Icon} from 'react-materialize';

class SignUp extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('/api/form-submit-url', {
          method: 'POST',
          body: data,
        });
    }
    render() {
    return (

        <form onSubmit={this.handleSubmit} className="sendInfo">
                    <TextInput className="formInput" email validate label="Email" />
                    <TextInput className="formInput" password label="Пароль" />
                    <Button type="submit" waves="light" className="SendFormButton">Подтвердить
                    <Icon right>send</Icon>
                    </Button>
        </form>
    )
}
}

export default SignUp