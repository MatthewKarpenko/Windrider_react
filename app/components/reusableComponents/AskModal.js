import React, { Component } from 'react';
import { Modal, Button, Header, Icon } from "semantic-ui-react";

export default class AskModal extends Component {
    render() {
        return (
          <Modal
            trigger={
              this.props.trigger
            }
            basic
            size="small"
            style={{margin: 'auto'}}
          >
            <Header icon={this.props.icon} content={this.props.headerText} />
            <Modal.Content>
              <p>
                {this.props.extraInfo}
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color="red" inverted>
                <Icon name="remove" /> Нет
              </Button>
              <Button color="blue" style={{color: 'white'}} inverted>
                <Icon name="checkmark" /> Да
              </Button>
            </Modal.Actions>
          </Modal>
        );
    }
}
