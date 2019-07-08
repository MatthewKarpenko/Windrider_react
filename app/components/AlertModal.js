import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

class AlertModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            open: false,
            show: this.props.active
        }

        this.show = size => () => this.setState({
            size,
            open: true
        })
        this.close = () => this.setState({
            open: false
        })
    }
  componentDidMount() {
      console.log(this.props.active)
      
  }

  render() {
    const { open, size } = this.state
    
    return (
      <div>
        

        <Modal size={'tiny'} open={open} onClose={this.close} style={{margin: 'auto'}}>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>{this.props.alertMessage}</p>
          </Modal.Content>
        
        </Modal>
      </div>
    )
  }
}

export default AlertModal