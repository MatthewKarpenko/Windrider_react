import React, { Component } from 'react';
import { Header, Modal, TextArea, Form} from 'semantic-ui-react';
import Post from './Post';


class ExistedPosts extends Component {
  constructor(props){
    super(props);
     this.postsArray = [
      //  <Post
      //    text="hello"
      //    img={null}
      //    time={14}
      //    key={Math.random() * Math.floor(100)}
      //  />,
      //  <Post
      //    text="hello"
      //    img={null}
      //    time={14}
      //    key={Math.random() * Math.floor(100)}
      //  />
     ];
  }
  render() {
    return (
      <div>
        {this.postsArray.map(post => {
          console.log(post.key);
          return post;
        })}
      </div>
    );
  }
}


class AddPost extends Component {
    constructor(props) {
        super();
        this.state = {
          text: "Hello",
          img: null,
          time: 14,
          newPost: []
        };
        this.newPost = []
       
        this.showPostsAndAddPost = this.showPostsAndAddPost.bind(this);
        this.textForNewPost = React.createRef();
        this.imgForNewPost = React.createRef();
        this.test = this.test.bind(this);
        this.textAreaPost = this.textAreaPost.bind(this);
    }
    
    showPostsAndAddPost () {
      const newPost = (
        <Post
          text={this.state.text}
          img={this.state.img}
          time={this.state.time}
          key={Math.random() * Math.floor(100)}
        />
      );
      const newArrayWithPosts = this.state.newPost;
      newArrayWithPosts.unshift(newPost);
      this.setState({newPost: newArrayWithPosts});
      console.log(this.state.newPost)
    }

    test() {
      console.log(this.textForNewPost);
      console.log(this.imgForNewPost);
    }

    textAreaPost(e) {
      this.setState({text: this.textForNewPost.current.value})
      console.log(this.state.text )
    }

    render() {
        return (
          <section>
            <div className="post-creating-holder z-depth-2">
              <h4 className="ui dividing header" onClick={this.showPostsAndAddPost}>Что у вас нового ?</h4>
              <Modal
                trigger={
                  <Form>
                    <TextArea placeholder="Расскажите всем что-нибудь" />
                  </Form>
                }
                closeIcon
                style={{ margin: "auto" }}
              >
                <Header
                  icon="paper plane outline"
                  content="Создать пост"
                />
                <Modal.Content>
                  <div className="ui form">
                    <h4 className="ui dividing header">
                      Что у вас нового ?
                    </h4>
                    <div className="field">
                      <label>Текст</label>
                      <textarea ref={this.textForNewPost} onChange={this.textAreaPost} />
                    </div>
                  </div>
                </Modal.Content>
                <div className="upload-btn-wrapper">
                  <button className="btn-upload-image ui button ">
                    <p >
                      <i className="plus icon" />
                      Фото
                    </p>
                  </button>
                  <input className='pointer' type="file" ref={this.imgForNewPost} name="myfile" />
                </div>
                <div className="actions">
                  <div className="ui button">Отменить</div>
                  <div className="ui green button" onClick={this.test}>Отправить</div>
                </div>
              </Modal>
              <div className="icon-holder">
                <i className="camera retro icon large" />
                <i className="paperclip icon large" />
                <i className="user icon large " />
              </div>
            </div>
            <div className='newPost-holder'>
              {this.state.newPost.map(post => {return post})}
              <ExistedPosts/>
            </div>
              </section>
        );
    }
}

export default AddPost