import React, { Component } from 'react';
import { Button, Comment, Form, Transition } from 'semantic-ui-react';

export default class CommentsBlock extends Component {
  constructor() {
    super();
    this.state = {
    
    }

    this.replyFormTransition = React.createRef();
    this.reply = React.createRef();
  }

  showReplyForm(commentReplyButton) {
    console.log(commentReplyButton.parentElement.parentElement)
  }

  componentDidMount() {
    console.log(this.actions)
  }

  render() {
    return (
      <div className="extra content">

        <Comment.Group threaded className="commentsThread">
          <Comment>
            <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <span>Today at 5:42PM</span>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions ref={this.actions}> 
                <a ref={this.reply} onClick={(e) => this.showReplyForm(this.reply)}>Reply</a>
              </Comment.Actions>
            </Comment.Content>
            <Transition visible={true} animation="scale" duration={350}>

            <Form reply>
            <Form.TextArea />
            <Button 
            content="Ответить" 
            labelPosition="right" 
            icon="paper plane outline" 
            className='right' 
            color='teal'
            primary />
          </Form>
          </Transition>
          </Comment>

          {/* <Comment>
            <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <span>Yesterday at 12:30AM</span>
              </Comment.Metadata>
              <Comment.Text>
                <p>This has been very useful for my research. Thanks as well!</p>
              </Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>

            <Comment.Group>
              <Comment>
                <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <span>Just now</span>
                  </Comment.Metadata>
                  <Comment.Text>Elliot you are always so right :)</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
                
              </Comment>
            </Comment.Group>
          </Comment>

          

          <Comment>
            <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <span>5 days ago</span>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <span>Just now</span>
                  </Comment.Metadata>
                  <Comment.Text>Elliot you are always so right :)</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
                
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <span>5 days ago</span>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <span>5 days ago</span>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

           <Comment>
            <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <span>5 days ago</span>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
          </Comment> */}

          
        </Comment.Group>
      </div>
    );
  }
}
