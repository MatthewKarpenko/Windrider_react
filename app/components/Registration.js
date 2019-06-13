import React from 'react'
import {Button,TextInput,Icon} from 'react-materialize';

class Registration extends React.Component {
    constructor(props) {
        super(props);
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
                        <TextInput className="formInput" label="Имя" />
                        <TextInput className="formInput" label="Фамилия" />
                        <TextInput className="formInput" email validate label="Email" />
                        <TextInput className="formInput" password label="Пароль" />
                        <TextInput className="formInput" password label="Повторите пароль" />
                        <Button type="submit" waves="light" className="SendFormButton">Подтвердить
                        <Icon right>send</Icon>
                        </Button>
                    </form>
    
    )
    }
}

export default Registration