import React from 'react';
import { Transition, Dropdown } from "semantic-ui-react";

import WindriderImg from '../../images/head3.png';
import AskDeleteModal from '../reusableComponents/AskModal'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCommentButton: false,
      visible: false
    };
    this.showElem = this.showElem.bind(this);
    this.hideElem = this.hideElem.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  showElem() {
    this.setState({ showCommentButton: true });
  }

  hideElem() {
    this.setState({ showCommentButton: false });
  }

  toggleVisibility () {this.setState(prevState => ({ visible: !prevState.visible }))};

  render() {
    const { visible } = this.state
    return (
      <section className="sectionWithPost">
        <div className="ui card postHolder">
          <div className="content author-time">
            <div className="right floated meta">
              <Dropdown
                icon="ellipsis vertical"
                style={{ cursor: "pointer" }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item
                    children={
                      <AskDeleteModal
                        trigger={<p>Удалить</p>}
                        icon="trash"
                        headerText="Вы действительно хотите удалить пост ?"
                        extraInfo="(Восстановление поста будет возможно только с помощью администратора)"
                      />
                    }
                  />
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="right floated meta ">{this.props.time}ч.</div>
            <div className="username-image">
              <img className="ui avatar image" src={WindriderImg} />
              <p>Матвей Карпенко</p>
            </div>
          </div>
          <div className="post-text">{this.props.text}</div>
          <div className="image">
            <img src={this.props.img} />
          </div>

          <div className="content comments-likes-container">
            <span className="right floated">
              <i className="hand peace outline icon" />
              17 лайков
            </span>
            <i className="comment icon" />3 комментария
          </div>

          <div className="extra content">
            <div className="ui large transparent left icon input">
              <i className="comment outline icon" />
              <input
                type="text"
                content={visible ? "Hide" : "Show"}
                onFocus={this.toggleVisibility}
                onBlur={this.toggleVisibility}
                placeholder="Оставить комментарий..."
              />
            </div>
            <Transition visible={visible} animation="scale" duration={350}>
              <button className="ui secondary button comment-button">
                Отправить
              </button>
            </Transition>
          </div>
        </div>
      </section>
    );
  }
}

export default Post