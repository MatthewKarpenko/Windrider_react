import React, { Component } from 'react';
import { Transition, Form } from 'semantic-ui-react';

import PropTypes from 'prop-types'

export default class CreateComment extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }

        //functions content bindings
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState(prevState => ({ visible: !prevState.visible }));
      }

    render() {
      const {visible} = this.state;
        return (
            <div className="extra content addCommentBlock">
            <div className="commentTextAreaHolder">
              <i className="comment outline icon" />
              <Form reply>
                <Form.TextArea content={visible ? 'Hide' : 'Show'} onFocus={this.toggleVisibility} onBlur={this.toggleVisibility} rows={1} placeholder="Оставить комментарий..." />
              </Form>
            </div>
            <Transition visible={visible} animation="scale" duration={350}>
              <button className="ui right secondary button comment-button">Отправить</button>
            </Transition>
          </div>
        )
    }
}

CreateComment.propTypes = {
  comments: PropTypes.array
};
