import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

class YesNoModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open,
      size: props.dimension,
      header: props.header,
      question: props.question,
      cb: props.cb
    };
    //function 'this' binding
    this.close = this.close.bind(this);
    this.modalFunction = this.modalFunction.bind(this);
  }

  close() {
    this.props.onClose();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.open !== state.open) {
      return {
        open: props.open,
        size: props.dimension,
        header: props.header,
        question: props.question,
        cb: props.cb
      };
    }

    // Return null if the state hasn't changed
    return null;
  }

  modalFunction() {
    this.state.cb();
    this.props.onClose();
  }

  render() {
    const { open, size, header, question } = this.state;
    if (!this.props.open) {
      return null;
    }
    return (
      <div>
        <Modal className="yesNoModal" size={size} open={open} onClose={this.close}>
          <Modal.Header>{header}</Modal.Header>
          <Modal.Content color="black">{question}</Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.props.onClose}>
              Нет
            </Button>
            <Button color="teal" icon="checkmark" labelPosition="right" content="Да" onClick={this.modalFunction} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default YesNoModal;
