import React, { Component } from 'react'

export default class ContactProriderIcons extends Component {
    constructor() {
        super();
        this.state = {
            showContact: true,
            contact: null
        }
        this.showClickedContact= this.showClickedContact.bind(this);
    }

    showClickedContact (contact) {
        this.setState({showContact: false});

        if (contact == 'phone') {
            this.setState({contact: <p>+380997726120</p>})
        }else if( contact == 'email'){
            this.setState({contact: <p>mtw.karp@gmail.com</p>})
        }else if (contact == 'facebook' ) {
            this.setState({contact: <a href='https://www.facebook.com/profile.php?id=100012268776460'>Link to facebook</a>})
        }else {
            this.setState({showContact: true})
        }

    } 

    render() {
        const { showContact } = this.state;
        if (showContact) {
            return (
                <div>
                    <i className='phone icon phone-contact' onClick={() => this.showClickedContact('phone')}></i>
                    <i className='envelope icon email-contact' onClick={() => this.showClickedContact('email')}></i>
                    <i className='facebook alternate icon facebook-contact' onClick={() => this.showClickedContact('facebook')}></i>
                </div>
            )
        }else {
            return(
                <div className='particularContact'>
                <p>{this.state.contact}</p>
                <i className='angle up icon facebook-contact' onClick={() => this.showClickedContact()} />
                </div>
            )
        }
      
    }
}
