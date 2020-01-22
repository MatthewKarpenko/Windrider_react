import React from 'react';
import { Transition, Dropdown, Button, Form, TextArea } from 'semantic-ui-react';

import YesNoModal from '../../../reusableComponents/YesNoModal';
import CreateComment from './CreateComment';
import CommentsBlock from './CommentsBlock';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsQuantity: props.commentsQuantity,
      likesQuantity: props.likesQuantity,
      authorText: props.authorText,
      img: props.img,
      likedByProrider: props.likedByProrider,
      likeText: 'лайков',
      modalOpen: false,
      modalQuestion: 'Вы действительно хотите удалить пост ?',
      modalHeader: 'Удаление поста',
      modalCallBack: () => {
        console.log('deleted');
      },
      visibleEditField: false
    };

    this.options = [
      {
        key: 'delete',
        icon: 'delete',
        text: 'Remove Post',
        value: 'delete',
        onClick: () => {
          this.deletePost();
        }
      },
      {
        key: 'edit',
        icon: 'edit',
        text: 'Edit Text',
        value: 'edit',
        onClick: () => {
          this.startEditText();
        }
      }
    ];

    //Refs
    this.likeIcon = React.createRef();
    this.proriderText = React.createRef();
    this.editingField = React.createRef();

    //functions this binding
    this.showElem = this.showElem.bind(this);
    this.hideElem = this.hideElem.bind(this);
    this.likePost = this.likePost.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.deleteComment = this.deletePost.bind(this);
  }

  likePost() {
    const { likedByProrider } = this.state;

    if (!likedByProrider) {
      this.likeIcon.current.className = 'hand peace icon';

      this.setState({
        likesQuantity: ++this.state.likesQuantity,
        likedByProrider: true
      });
    } else {
      this.likeIcon.current.className = 'hand peace outline icon';

      this.setState({
        likesQuantity: --this.state.likesQuantity,
        likedByProrider: false
      });
    }

    this.changeLikeText();
  }

  showElem() {
    this.setState({ showCommentButton: true });
  }

  hideElem() {
    this.setState({ showCommentButton: false });
  }


  changeLikeText() {
    let text;
    let likes = this.state.likesQuantity;

    if (likes === 1) {
      text = 'лайк';
    } else if (likes > 1 && likes < 5) {
      text = 'лайкa';
    } else {
      text = 'лайков';
    }

    this.setState({ likeText: text });
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  deletePost() {
    this.setState({
      modalOpen: true,
      modalQuestion: 'Вы действительно хотите удалить пост ?',
      modalHeader: 'Удаление поста',
      modalCallBack: () => {
        console.log('deleted post');
      }
    });
  }

  deleteComment() {
    this.setState({
      modalOpen: true,
      modalQuestion: 'Вы действительно хотите удалить комментарий ?',
      modalHeader: 'Удаление комментария',
      modalCallBack: () => {
        console.log('deleted comment');
      }
    });
  }

  startEditText() {
    this.proriderText.current.style.display="none";
    this.setState({visibleEditField: true});

  }

  componentDidMount() {
    this.changeLikeText();
  }

  render() {
    const { visible, visibleEditField, modalOpen } = this.state;
    return (
      <section className="sectionWithPost">
        <div className="ui card postHolder">
          <div className="content author-time">
            <div className="right floated meta">
              <Button.Group color="teal" className="editPostButton">
                <Dropdown className="button icon" floating options={this.options} trigger={<React.Fragment />} closeOnEscape={true} />
              </Button.Group>
            </div>

            <div className="right floated meta timeWhenPosted">{this.props.timeWhenPosted} ч.</div>
            <div className="username-image">
              <img className="ui avatar image" src='../../../assets/head3.png' />
              <p>Матвей Карпенко</p>
            </div>
          </div>
          <div ref={this.proriderText} className="post-text">{this.state.authorText}</div>
          <Transition visible={visibleEditField} animation="scale" duration={350}>

          <Form  className="textEditing">
            <TextArea ref={this.editingField} rows={40} placeholder="Tell us more" />
            <Button.Group>
              <Button>Отмена</Button>
              <Button.Or text=''/>
              <Button color='teal'>Сохранить</Button>
            </Button.Group>
          </Form>
          </Transition>
          <div className="image">
            <img src={this.state.img} />
          </div>

          <div className="feedbackContainer">
            <div className="content commentsNumber">
              <i className="comment icon" />
              {this.state.commentsQuantity}
            </div>

            <div className="likesNumber" onClick={() => this.likePost()}>
              <i ref={this.likeIcon} className={this.state.likedByProrider ? 'hand peace icon' : 'hand peace outline icon'} />
              <p>
                {' '}
                {this.state.likesQuantity} {this.state.likeText}
              </p>
            </div>
          </div>
       <CommentsBlock />
       <CreateComment comments={[]} />
        
        </div>
        <YesNoModal open={modalOpen} dimension="mini" onClose={this.toggleModal} cb={this.state.modalCallBack} question={this.state.modalQuestion} header={this.state.modalHeader} />
      </section>
    );
  }
}

export default Post;
